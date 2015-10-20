var React = require('react');
var ReactDOM = require('react-dom');

var APP = React.createClass({

  render: function() {
    return (
      <h1>Hello React</h1>
    );
  }

});

React.render(<APP />, document.getElementById('main'));

module.exports = main;