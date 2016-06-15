import AltContainer from 'alt-container';
import React, { Component } from 'react';

import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import LaneActions from '../actions/LaneActions';

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
              notes: () => NoteStore.getNotesByIds(lane.notes)
            }}
            >

            <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
          </AltContainer>
      </div>
    );
  }

  addNote = (e) => {
    const laneId = this.props.lane.id;
    const note = NoteActions.create({task: 'New task'});

    LaneActions.attachToLane({
      noteId: note.id,
      laneId
    });
  }

  editNote(id, task) {
   // Don't modify if trying set an empty value
   if(!task.trim()) {
     NoteActions.update({id, editing: false});
     return;
   }

   NoteActions.update({id, task, editing: false});
 }

  deleteNote = (noteId, e) => {
    // avid bubbling to edit
    e.stopPropagation();

    const laneId = this.props.lane.id;

    LaneActions.detachFromLane({laneId, noteId});
    NoteActions.delete(noteId);
  }

}