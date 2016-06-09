import uuid from 'node-uuid';
import React from 'react';


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
        <ul>{notes.map(note =>
          <li key={note.id}>{note.task}</li>
        )}</ul>
      </div>
    );
  }
}