import AltContainer from 'alt-container';
import React, { Component } from 'react';

import Editable from './Editable.jsx';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import LaneActions from '../actions/LaneActions';

export default class Lane extends Component {

  render() {
    const {lane, ...props} = this.props;

    return (
      <div { ...props}>
        <div className="lane-header" onCick={this.activeLaneEdit}>
          <div className="lane-add-notes">
            <button onClick={this.addNote}>+</button>
          </div>
            <Editable className="lane-name" editing={lane.editing} value={lane.name} onEdit={this.editName} />
            <div className="lane-delete">
              <button onClick={this.deleteLane}>x</button>
            </div>
        </div>
          <AltContainer
            stores={[NoteStore]}
            inject={{
              notes: () => NoteStore.getNotesByIds(lane.notes)
            }}
            >

            <Notes
              onValueClick={this.activeNoteEdit}
              onEdit={this.editNote}
              onDelete={this.deleteNote} />
          </AltContainer>
      </div>
    );
  }

  addNote = (e) => {
    // avoid opening lane name edit by stopping event bubbling
    e.stopPropagation();

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

  editName = (name) => {
    const laneId = this.props.lane.id;

    // dont modify if trying to set empty value
    if(!name.trim()) {
      LaneActions.update({id: laneId, editing: false});

      return;
    }
  }

  deleteLane = () => {
    const laneId = this.props.lane.id;

    LaneActions.delete(laneId);
  }

  activeLaneEdit = () => {
    const laneId = this.props.lane.id;

    LaneActions.update({id: laneId, editing: true});
  }

  activeNoteEdit(id) {
    NoteActions.update({id, editing: true});
  }

}
