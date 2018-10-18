import React, { Component } from 'react'
import PlinthContainer from '../PlinthContainer';
// import { Link } from 'react-router-dom';
// import ModalExample from '../ModalExample';
import { Segment } from 'semantic-ui-react';
import MyMenu from '../MyMenu';
import {getPlinthData} from '../../server';


const test = {
  backgroundColor: "red",
  height: '100%',
  float: 'center',
}

// const title_text = 'SensiLab Plinth Project <3 etopiei';

//const Home = () => {
export default class Home extends Component {
  constructor(){  
    super();
    this.state = { 
      activeItem: 'home',    
      plinths: []  
     };
    
    getPlinthData(true,-1).then((data) => {
      console.log(data);
      let test = data[0];
      this.setState(
        {
          plinths: test,
        }
      )
      console.log(this.state.plinths)
      // Set plinth data from 'data' variable which was returned from the server
    }).catch((err) => {
      console.log("An error occured: " + err.toString());
    })
  }
 
  render() {

    return (
      <Segment inverted style={{minHeight: "100%", marginTop:"0px", marginBottom:"0px"}}>
          <div style={{width: "100%", height: "8%"}}>
            <h1 style={{paddingLeft:"0.5%"}}>
              <img src={require("../../s.png")} alt="S" style={{height: "100%", maxHeight: "4rem"}}/>
            </h1>
          </div>
          <div style={{width: "100%", paddingTop: "2rem"}}>
              <MyMenu activeItem={"home"} style/>
              <PlinthContainer key={0} style={test} plinthDetails ={this.state.plinths}/>
          </div>
      </Segment>
)}
}

//        <h1>{title_text}</h1>


/*
<ModalExample plinthName={ this.state.selected }/>
      <Button primary><Link style={{color: "#fff"}}to="/Favourite"> Favourite </Link></Button>
      <Button primary><Link style={{color: "#fff"}}to="/Configurations"> Configurations </Link></Button>
      */
/*<Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu> */


//export default Home;