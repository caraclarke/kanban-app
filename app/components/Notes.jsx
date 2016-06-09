import uuid from 'node-uuid';
import React from 'react';
import Note from './Note.jsx';

export default class Notes extends React.Component {

  render() {

    return (
      <div>

      <button onCick={this.addNote}>test</button>
      </div>
    );
  }

}