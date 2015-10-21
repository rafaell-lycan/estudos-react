var React = require('react');

var TaskInput = React.createClass({

  getDefaultProps: function () {
    return {}
  },

  getInitialState: function () {
    return null;
  },

  render: function() {
    return (
      <form className="form-inline col-xs-8 col-xs-offset-2 task-input">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Todo..." />
          <span className='input-group-btn'>
            <button className='btn btn-primary'>Add</button>
          </span>
        </div>
      </form>
    );
  }

});

module.exports = TaskInput;
