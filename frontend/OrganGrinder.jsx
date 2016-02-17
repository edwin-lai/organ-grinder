var React= require('react'),
    ReactDOM = require('react-dom'),
    OrganDispatcher = require('./dispatcher/Dispatcher.js'),
    Note = require ('./util/note.js'),
    KeyListener = require('./util/KeyListener.js');

window.OrganDispatcher = OrganDispatcher;
window.Note = Note;
window.KeyListener = KeyListener; 
