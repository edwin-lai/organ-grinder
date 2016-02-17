var Note = require('./note.js');
//TODO: require key actions

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
  73: 'c5'
};

var KeyListener = {
  on: $(document).on('keydown', function () {debugger; console.log('hello') }/*KeyActions.keyPressed*/),
  off: $(document).on('keyup', console.log('goodbye') /*KeyActions.keyReleased*/)
};

module.exports = KeyListener;
