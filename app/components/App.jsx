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
        <Notes notes={notes} />
      </div>
    );
  }

  addNote = () => {
   this.setState({
     notes: this.state.notes.concat([{
       id: uuid.v4(),
       task: 'New Task'
     }])
   });
  };

}