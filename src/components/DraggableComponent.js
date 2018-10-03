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
        <Draggable color='#000' defaultPosition={this.state.position} onDrag={console.log("THIS")}>
              <div style={{backgroundColor:'#e45', height: '5%', width: '5%', alignitems: 'center'}}><h1 style={{alignSelf: 'center'}}>{this.props.plinthID}</h1></div> 
        </Draggable>
      )
    }
  };

export default DraggableComponent;