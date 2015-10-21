var React = require('react');
var TodoList = require('./todo-list');

var APP = React.createClass({

  render: function() {
    return (
      <div className="container">
        <TodoList />
      </div>
    );
  }

});

module.exports = APP;
