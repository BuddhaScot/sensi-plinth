import React, {Component} from 'react';
import Draggable, {position} from 'react-draggable';

class DraggableComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        position: {x: this.props.position.x, y: this.props.position.y}
      }
    }
    render(){
      return(
        <Draggable defaultPosition={this.state.position} onDrag={console.log("THIS")}>
            <div style={{fill: '#000'}}>
            <h1> {this.props.plinthID} </h1> 
            </div>  
        </Draggable>
      )
    }
  };

export default DraggableComponent;