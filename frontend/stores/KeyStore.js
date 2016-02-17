var Note = require('../util/note.js');
var Store = require('flux/utils').Store;
var OrganDispatcher = require('../dispatcher/Dispatcher.js');

var _notes = [];
var KeyStore = new Store(OrganDispatcher);

KeyStore.all = function () {
  return _notes.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'ADD_NOTE':
      addNote(payload.note);
      KeyStore.__emitChange();
      console.log(_notes);
      break;
    case 'RECEIVE_SCORE':
      resetNotes(payload.notes);
      KeyStore.__emitChange();
      break;
    case 'STOP_NOTE':
      stopNote(payload.note);
      KeyStore.__emitChange();
      console.log(_notes);
      break;
  }
  console.log(payload);
};

function addNote(note) {
  _notes.push(note);
}

function resetNotes(notes) {
  _notes = notes;
}

function stopNote(note) {
  _notes = _notes.filter( function(element) {
    return element !== note;
  });
}

module.exports = KeyStore;
