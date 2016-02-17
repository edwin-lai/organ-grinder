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
      break;
    case 'RECEIVE_SCORE':
      resetNotes(payload.notes);
      KeyStore.__emitChange();
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

module.exports = KeyStore;
