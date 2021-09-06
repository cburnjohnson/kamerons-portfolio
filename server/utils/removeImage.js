function removeImage(req, id) {
  req.app.locals.gfs.remove({ _id: id, root: 'fs' });
}

module.exports = removeImage;
