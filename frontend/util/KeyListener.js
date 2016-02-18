var Note = require('./note.js');
var KeyActions = require('../actions/KeyActions.js');

var Mapping = {
  81: 'c',
  50: 'c#',
  87: 'd',
  51: 'd#',
  69: 'e',
  82: 'f',
  53: 'f#',
  84: 'g',
  54: 'g#',
  89: 'a',
  55: 'a#',
  85: 'b',
  73: 'c5',
  57: 'c5#',
  79: 'd5',
  48: 'd5#',
  80: 'e5',
  219: 'f5',
  187: 'f5#',
  221: 'g5'
};

var KeyListener = {
  on: $(document).on('keydown', function (e) {
    if (Mapping[e.keyCode] !== undefined) {
      KeyActions.keyPressed(Mapping[e.keyCode]);
    }
  }),
  off: $(document).on('keyup', function (e) {
    if (Mapping[e.keyCode] !== undefined) {
      KeyActions.keyReleased(Mapping[e.keyCode]);
    }
  })
};

module.exports = KeyListener;
