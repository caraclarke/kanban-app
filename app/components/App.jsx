import AltContainer from 'alt-container';
import React, { Component } from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// provide back end to DragDropContext
@DragDropContext(HTML5Backend)

export default class App extends Component {

  render() {

    return (
      <div>
        <button type="button" className="add-lane btn btn-success" onClick={this.addLane}>+ New Lane</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes || []
          }}
        >
          <Lanes />
        </AltContainer>
      </div>
    );
  }

  addLane() {
    LaneActions.create({ name: 'New lane' });
  }

}