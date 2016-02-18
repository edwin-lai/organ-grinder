var React= require('react'),
    ReactDOM = require('react-dom'),
    OrganDispatcher = require('./dispatcher/Dispatcher.js'),
    Note = require ('./util/note.js'),
    KeyListener = require('./util/KeyListener.js'),
    KeyStore = require('./stores/KeyStore.js'),
    Key = require('./components/Key.jsx'),
    Organ = require('./components/Organ.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Organ/>, document.getElementById('root'));
});

// window.OrganDispatcher = OrganDispatcher;
// window.Note = Note;
// window.KeyListener = KeyListener;
// window.KeyStore = KeyStore;
