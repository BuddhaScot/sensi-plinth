import React, {Component} from 'react';
import Draggable, {position} from 'react-draggable';
import { rgbToHex } from '../server';

class DraggableComponent extends Component {
    constructor(props){
      super(props);
      console.log("right here", this.props)
      this.state = {
        position: {x: this.props.plinthItem.x, y: this.props.plinthItem.y},
        colour: rgbToHex(this.props.plinthItem.r, this.props.plinthItem.g, this.props.plinthItem.b)
      }
    }
    render(){
      return(
        <Draggable color='#000' defaultPosition={this.state.position} onDrag={console.log("THIS")}>
              <div style={{backgroundColor:this.state.colour, height: '5%', width: '5%', alignitems: 'center'}}><h1 style={{alignSelf: 'center'}}>{this.props.plinthID}</h1></div> 
        </Draggable>
      )
    }
  };

export default DraggableComponent;