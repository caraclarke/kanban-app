import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    // track editing state
    this.state = {
      editing: false
    };
  }

  render() {

    // render component differently based on state
    if (this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }

  renderEdit = () => {
    return <input type="text"
      ref={
        element => element ?
        element.selectionStart = this.props.task.length : null
      }
      autofocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderNote = () => {
    // if user clicks normal note, trigger editing
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span>{this.props.task}</span>
        { onDelete ? this.renderDelete() : null }
      </div>
    )
  };

  renderDelete = () => {
    return <button onClick={this.props.onDelete}>x</button>;
  };

  edit = () => {
    // enter edit mode
    this.setState({ editing: true });
  };

  checkEnter = (e) => {
    // user hit enter
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    // 'note' will trigger optional 'onEdit' callback when has new value
    // use cb to communicate change to 'App'

    const value = e.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(value);

      // exit edit mode
      this.setState({ editing: false });
    }
  };
}