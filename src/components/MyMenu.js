import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    }

    console.log(this.state.activeItem)
    console.log(this.state.activeItem !== 'configurations')
  }

  handleItemClick = (e, name) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu tabular>
        <Link to="/"><Menu.Item name='home' active={activeItem === 'home'} style={activeItem !== 'home' ? {color: '#fff'} : {color: '#000'}} onClick={this.handleItemClick}>Home</Menu.Item></Link>
        <Link to="/Favourite"><Menu.Item name='favourites' active={activeItem === 'favourites'} style={activeItem !== 'favourites' ? {color: '#fff'} : {color: '#000'}} onClick={this.handleItemClick}>Configurations</Menu.Item></Link>
        <Link to="/Configurations"><Menu.Item name='configurations' active={activeItem === 'configurations'} style={activeItem !== 'configurations' ? {color: '#fff'} : {color: '#000'}} onClick={this.handleItemClick}>Favourites</Menu.Item></Link>
      </Menu>
    )
  }
}