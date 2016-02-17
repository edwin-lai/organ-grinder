var OrganDispatcher = require('../dispatcher/Dispatcher.js');

var KeyActions = {
  keyPressed: function (note) {
    OrganDispatcher.dispatch({
      actionType: "ADD_NOTE",
      note: note
    });
  },
  fetchScore: function (score) {
    OrganDispatcher.dispatch({
      actionType: 'RECEIVE_SCORE',
      notes: score
    });
  },
  keyReleased: function (note) {
    OrganDispatcher.dispatch({
      actionType: "STOP_NOTE",
      note: note
    });
  }
};

module.exports = KeyActions;
