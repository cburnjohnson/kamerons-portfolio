require('dotenv').config();
const express = require('express');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const connectDB = require('./config/db');
const auth = require('./middleware/auth');

const Event = require('./models/Event');

const app = express();

// Middleware
app.use(express.json());
app.use(methodOverride('_method'));

// Mongo URI
const mongoURI = process.env.MONGO_URI;

// create mongo connection
connectDB();
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// init gfs
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('fs');

  app.locals.gfs = gfs;
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
        // add event name here
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketname: 'fs',
          aliases: req.body.eventName,
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

// Routes
app.use('/api/events', require('./routes/events'));
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/users', require('./routes/users'));

// @route POST /upload
// @desc Uploads file to DB
// can upload multiple files
app.post('/upload', [auth, upload.array('files', 20)], async (req, res) => {
  const fileNames = req.files.map((file) => file.filename);

  const { dateOfEvent, eventType } = req.body;

  try {
    const newEvent = new Event({
      dateOfEvent: dateOfEvent,
      type: eventType,
      images: fileNames,
    });

    const event = await newEvent.save();

    res.json(event);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
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
app.get('/api/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // check if file exists
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exist',
      });
    }
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

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/dist'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  );
}

const PORT = 5000;

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

module.exports = app;
