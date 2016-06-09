import uuid from 'node-uuid';
import React from 'react';


export default class App extends React.Component {
  render() {
    const notes = [
      {
        id: uuid.v4(),
        task: 'Do Laundry'
      },
      {
        id: uuid.v4(),
        task: 'Go to CVS'
      }
    ];

    return (
      <div>
        <ul>{notes.map(note =>
          <li key={note.id}>{note.task}</li>
        )}</ul>
      </div>
    );
  }
}