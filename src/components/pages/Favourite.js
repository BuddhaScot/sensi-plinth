import React, {Component} from 'react';
import DraggableComponent from '../DraggableComponent';


class Favourite extends Component{
  constructor(props){
    super(props)
    //this.state = {
    // x: this.getXpositionOfPlinth();
    // y: this.getYpositionOfPlinth();
    //}
    this.state = {
      //plinths: getPlinths();
      plinths: [1,2,3,4,5,6,7,8,9],
      position: {x:Math.random() * 1000 , y:Math.random() * 1000}
    }
  }
  render() {
    const listofPlinths = this.state.plinths;
    return(
      <span>
      {
        listofPlinths.map((Item, index) => {
        return <DraggableComponent position={{x:Math.random() * 500 , y:Math.random() * 200}} plinthID={index+1}/>
        })
      }
        <DraggableComponent position={this.state.position} plinthID={10}/>
      </span>
    );
  }
}

export default Favourite;