var React = require('react');
var KeyStore = require('../stores/KeyStore.js');
var KeyListener = require('../util/KeyListener.js');
var TONES = require('../constants/Tones.js');
var Note = require('../util/note.js');

var Keys = React.createClass({
  getInitialState: function () {
    return {
      notes: KeyStore.all()
    };
  },

  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);
    this.listenerToken = KeyStore.addListener(this.playNote);
  },

  componentWillUnmount: function () {
    KeyStore.remove(this.listenerToken);
  },

  playNote: function() {
    var notes = KeyStore.all();
    if (notes.includes(this.props.noteName)) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  render: function () {
    return <div></div>;
  }
});

module.exports = Keys;
