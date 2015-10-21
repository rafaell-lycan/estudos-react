var React = require('react');
var Task = require('./task');
var TaskInput = require('./task-input');

var TodoList = React.createClass({
  getInitialState: function () {
    return{
      todos: [
        {value : 'Learn JavaScript', done: false },
        {value : 'Buy Milk', done: true },
        {value : 'Learn React', done: false }
      ]
    };
  },

  render: function() {
    var todos = this.state.todos.map(function (task, index) {
      return( <Task key={index} value={task.value} done={task.done} /> )
    }.bind(this));

    return (
      <div className="col-xs-6 col-xs-offset-3 todo-list">
        <h1 className="title">My Awesome TodoList</h1>
        {todos}
        <TaskInput />
      </div>
    );
  }

});

module.exports = TodoList;
