const express = require('express');
const router = express.Router();
const getImage = require('../utils/getImage');
const removeImage = require('../utils/removeImage');
const auth = require('../middleware/auth');

const Event = require('../models/Event');

// @route   GET /api/events
// @desc    Get all events
// @access  Public
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   DELETE /api/events/:id
// @desc    Delete an event with its images
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let event = await Event.findById(req.params.id);

    if (!event) res.status(404).json({ msg: 'Event not found' });

    event.images.forEach(async (image) => {
      const imageDoc = await getImage(req, image);

      if (imageDoc) {
        await removeImage(req, imageDoc._id);
      }
    });

    await Event.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Event deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
