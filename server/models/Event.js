const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('event', EventSchema);
