var React = require('react');
var Key = require('./key.jsx');
var TONES = require('../constants/Tones.js');
var KeyStore = require('../stores/KeyStore.js');

var Organ = React.createClass({

  keys: function () {
    var tones = Object.keys(TONES);
    return tones.map( function (el) {
      var color;
      if (el.slice(-1) === "#") {
        color = "black";
      } else {
        color = "white";
      }
      //
      // if (KeyStore.all().includes(el)) {
      //   color += " playing";
      // } else if (color.slice(-8) === ' playing') {
      //   color -= ' playing';
      // }

      return <li className={color}><Key noteName={el}/></li>;
    });
  },
  //
  // componentDidMount: function () {
  //   var that = this;
  //   this.listenerToken = KeyStore.addListener(that.render.bind(that));
  // },
  //
  // componentWillUnmount: function () {
  //   KeyStore.remove(this.listenerToken);
  // },

  render: function () {
    return <ul>{this.keys()}</ul>;
  }

});

module.exports = Organ;
