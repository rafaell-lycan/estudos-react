var React = require('react');

var Task = React.createClass({

  getDefaultProps: function () {
    return {
      defaultClass: 'task'
    }
  },

  getInitialState: function () {
    return null;
  },

  updateTodoClass : function () {
    this.props.defaultClass+= (this.props.done) ? ' task-success' : ' task-info';
  },

  render: function() {
    this.updateTodoClass();

    return (
      <div className={this.props.defaultClass}>
        <i className="fa fa-check mark-done" onClick={this.props.markTaskDone}></i>
        <span>{this.props.value}</span>
        <i className="fa fa-times close" onClick={this.props.removeTask}></i>
      </div>
    );
  }

});

module.exports = Task;
