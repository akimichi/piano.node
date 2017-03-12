const express = require('express');
const router = express.Router();
const MIDI = require('../lib/midi.js');
const IO = require('../lib/io.js');

// define the home page route
router.get('/', (req, res) => {
  res.send('API home page');
});
// define the about route
router.get('/about', (req, res) => {
  res.send('About API');
});
router.get('/programs', (req, res) => {
  res.send('About API');
});

router.get('/channel', (req, res) => {
  res.send('channel message');
});

router.get('/channel/voice', (req, res) => {
  res.send('channel message');
});
router.get('/channel/voice/note', (req, res) => {
  res.send('channel message');
});
router.get('/channel/voice/note/on', (req, res) => {
  res.send('note on message');
});
router.post('/channel/voice/note/on.json', (req, res) => {
  console.log(req.body);
  MIDI.note_on(1,1,1);
  res.json(req.body);
});
router.post('/channel/voice/note/off', (req, res) => {
  res.send('channel message');
});
// Program Change 
router.post('/channel/voice/program/change', (req, res) => {
  console.log('/channel/voice/program/change');
  console.log(req.body);
  IO.run(MIDI.program_change(1,req.body.program_number));
  res.redirect('/');
});
// Pitch Bend
router.post('/channel/voice/pitch', (req, res) => {
  console.log('/channel/voice/pitch');
  console.log(req.body);
  IO.run(MIDI.pitch_bend(1,req.body.pitch_value));
  res.redirect('/');
});
// Modulation Depth
router.post('/channel/voice/modulation', (req, res) => {
  console.log('/channel/voice/modulation');
  console.log(req.body);
  IO.run(MIDI.modulation_depth(1,req.body.modulation_value));
  res.redirect('/');
});
router.post('/channel/voice/control', (req, res) => {
  res.send('channel message');
});

router.get('/system', (req, res) => {
  res.send('system message');
});

module.exports = router;

