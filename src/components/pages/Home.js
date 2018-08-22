import React from 'react';
import PlinthContainer from '../PlinthContainer';
import { Link } from 'react-router-dom';
import ModalExample from '../ModalExample';
import { Button, Segment } from 'semantic-ui-react';


const test = {
  backgroundColor: "red",
  height: '100%'
}

const title_text = 'SensiLab Plinth Project <3 Cameron';

const Home = () => {
  this.state = { selected: [] };
  return (
    <Segment inverted style={{minHeight: "100%", marginTop:"0px", marginBottom:"0px"}}>
      <h1>{title_text}</h1>
      <ModalExample plinthName={ this.state.selected }/>
      <Button primary><Link style={{color: "#fff"}}to="/Favourite"> Favourite </Link></Button>
      <Button primary><Link style={{color: "#fff"}}to="/Configurations"> Configurations </Link></Button>
      <PlinthContainer key={0} style={test}/>
    </Segment>
)}

export default Home;