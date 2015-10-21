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

  componentWillMount: function () {
    this.props.defaultClass+= (this.props.done) ? ' task-success' : ' task-info';
  },

  markTaskDone : function () {
    console.log("->Done");
  },

  removeTask: function () {
    console.log("->Deleted");
  },

  render: function() {
    return (
      <div className={this.props.defaultClass}>
        <i className="fa fa-check mark-done" onClick={this.markTaskDone}></i>
        <span>{this.props.value}</span>
        <i className="fa fa-times close" onClick={this.removeTask}></i>
      </div>
    );
  }

});

module.exports = Task;
