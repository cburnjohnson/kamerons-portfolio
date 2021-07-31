require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(methodOverride('_method'));

// Mongo URI
const mongoURI = process.env.MONGO_URI;

// create mongo connection
const conn = mongoose.createConnection(mongoURI);

// init gfs
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('fs');
});

// Create storage
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketname: 'fs',
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

// @route GET /
// @desc Loads form
app.get('/', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // check if files exist
    if (!files || files.length === 0) {
      res.render('index', { files: false });
    } else {
      files.map((file) => {
        if (
          file.contentType === 'image/jpeg' ||
          file.contentType === 'image/png'
        ) {
          file.isImage = true;
        } else {
          file.isImage = false;
        }
      });

      res.render('index', { files: files });
    }
  });
});

// @route POST /upload
// @desc Uploads file to DB
// can upload multiple files
app.post('/upload', upload.single('file'), (req, res) => {
  res.redirect('/');
});

// @route GET /files
// @desc  Display all files in JSON
app.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // check if files exist
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist',
      });
    }

    // files exist
    return res.json(files);
  });
});

// @route GET /file/:filename
// @desc  Display a single file in JSON
app.get('/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // check if file exists
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exist',
      });
    }

    // file exists
    return res.json(file);
  });
});

// @route GET /image/:filename
// @desc  Display image
app.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // check if file exists
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exist',
      });
    }
    console.log(file.contentType);
    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image',
      });
    }
  });
});

// @route DELETE /files/:id
// @desc Delete file
app.delete('/files/:id', (req, res) => {
  gfs.remove({ _id: req.params.id, root: 'fs' }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }

    res.redirect('/');
  });
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));