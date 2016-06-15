import AltContainer from 'alt-container';
import React, { Component } from 'react';

import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class Lane extends Component {

  render() {
    const {lane, ...props} = this.props;

    return (
      <div { ...props}>
        <div className="lane-header">
          <div className="lane-add-notes">
            <button onClick={this.addNote}>+</button>
          </div>
            <div className="lane-name">{lane.name}</div>
        </div>
          <AltContainer
            stores={[NoteStore]}
            inject={{
              notes: () => NoteStore.getState().notes || []
            }}
            >

            <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
          </AltContainer>
      </div>
    );
  }

  addNote() {
    NoteActions.create({task: 'New task'});
  }

  editNote(id, task) {
    // Don't modify if trying set an empty value
    if(!task.trim()) {
      return;
    }

    NoteActions.update({id, task});
  }

  deleteNote(id, e) {
    e.stopPropagation();

    NoteActions.delete(id);
  }

}
