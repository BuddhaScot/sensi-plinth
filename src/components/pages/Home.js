import React, { Component } from 'react'
import PlinthContainer from '../PlinthContainer';
import { Link } from 'react-router-dom';
import ModalExample from '../ModalExample';
import { Menu, Button, Segment } from 'semantic-ui-react';

const test = {
  backgroundColor: "red",
  height: '100%',
  float: 'center',
}

const title_text = 'SensiLab Plinth Project <3 etopiei';

//const Home = () => {
export default class Home extends Component {
  constructor(){
    super();
    this.state = { 
      activeItem: 'home',
    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 
  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted style={{minHeight: "100%", marginTop:"0px", marginBottom:"0px"}}>
        <h1>{title_text}</h1>
        <Menu tabular>
          <Menu.Item name='home' active={activeItem === 'home'} style={activeItem !== 'home' ? {color: '#fff'} : {color: '#000'}}onClick={this.handleItemClick} />
          <Menu.Item name='favourites' active={activeItem === 'favourites'} style={activeItem !== 'favourites' ? {color: '#fff'} : {color: '#000'}} onClick={this.handleItemClick}/>
          <Menu.Item name='Configurations' active={activeItem === 'Configurations'} style={activeItem !== 'Configurations' ? {color: '#fff'} : {color: '#000'}} onClick={this.handleItemClick} />
        </Menu>
      <ModalExample plinthName={ this.state.selected }/>
      <Button primary><Link style={{color: "#fff"}}to="/Favourite"> Favourite </Link></Button>
      <Button primary><Link style={{color: "#fff"}}to="/Configurations"> Configurations </Link></Button>
      <PlinthContainer key={0} style={test}/>
    </Segment>
)}
}
/*<Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu> */


//export default Home;