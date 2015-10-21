var React = require('react');
var TodoList = require('./todo-list');

var APP = React.createClass({

  render: function() {
    return (
      <div className="container">
        <h1>Hello World</h1>

        <TodoList />
      </div>
    );
  }

});

module.exports = APP;
