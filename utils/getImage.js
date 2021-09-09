function getImage(req, filename) {
  return req.app.locals.gfs.files.findOne({ filename: filename });
}

module.exports = getImage;
