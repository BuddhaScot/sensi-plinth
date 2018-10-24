import React, {Component} from 'react';
import DraggableComponent from '../DraggableComponent';
import { getConfig } from '../../server';
import {Segment} from 'semantic-ui-react';
import MyMenu from '../MyMenu';
import image from '../../floorPlan.png';



class Favourite extends Component{
  constructor(props){
    super(props)
    const { data } = this.props.location

    // let JSON_FAKE = undefined;
    this.state = {
      config: data === undefined ? "current" : data,
      //plinths: [1,2,3,4,5,6,7,8,9],
      plinths: [],
      soemthingToTest: {x:100, y:100},
      position: {x:Math.random() * 1000 , y:Math.random() * 1000}
    }
    console.log("THIS IS THE LOG YOU'RE LOOKING FOR: ",this.state.config)


    getConfig(this.state.config).then((data) => {
      this.setState({
        plinths: data[0],
      })
      console.log(data[0])
    }).catch((error) => {
      console.log(error)
    })
    console.log(this.state.config)
  }

  render() {
    const listofPlinths = this.state.plinths;
    const title_text = "Edit Configuration"
    return(
      <Segment inverted style={{minHeight: "100%", marginTop:"0px", marginBottom:"0px"}}>
      <h1 style={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>{title_text}</h1>  
      <MyMenu activeItem={"favourites"}/>
      <div style={{backgroundColor:"#fff", backgroundImage: image, width: "1000px", height: '800px', marginLeft:'auto', marginRight:'auto', justifyContent: 'center', borderRadius:'0.5%'}}>
        {
          listofPlinths.map((Item, index) => {
            console.log(Item)
            return <DraggableComponent plinthItem={{x: Item.x, y: Item.y, plinthID: Item.plinth_id, r: Item.r, g: Item.g, b: Item.b, w: Item.w}}/>
          })
        }
        </div>
      </Segment>
    );
  }
}
//        <DraggableComponent position={this.state.position} plinthID={10}/>


export default Favourite;