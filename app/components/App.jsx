import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        notes: [
          {
            id: uuid.v4(),
            task: 'Do Laundry'
          },
          {
            id: uuid.v4(),
            task: 'Go to CVS'
          },
          {
            id: uuid.v4(),
            task: 'Check emails'
          }
        ]
      };
  }

  render() {

    const notes = this.state.notes;

    return (
      <div>

      <button onCick={this.addNote}>+</button>
        <Notes notes={notes} onEdit={this.editNote} />
      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  };

  editNote = (id, task) => {
    // don't modify if trying to set an empty value
    if (!task.trim()) {
      return;
    }

    const notes = this.state.notes.map(note => {
      if (note.id === id && task) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  };

}