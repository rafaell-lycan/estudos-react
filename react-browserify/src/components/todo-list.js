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

  markTaskDone: function (index) {
    console.log("->", index);
    var todos = this.state.todos;
    var task = todos[index];

    todos.splice(index,1);
    task.done = !task.done;

    task.done ? todos.push(task) : todos.unshift(task);

    this.setState({
      todos: todos
    });
  },

  removeTask: function (index) {
    this.state.todos.splice(index, 1);

    this.setState({
      todos: this.state.todos
    });
  },

  render: function() {
    var todos = this.state.todos.map(function (task, index) {
      return(
        <Task
        key={index}
        value={task.value}
        done={task.done}
        markTaskDone={this.markTaskDone.bind(this, index)}
        removeTask={this.removeTask.bind(this, index)}
      /> )
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
