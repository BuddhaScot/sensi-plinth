import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    }
  }

  handleItemClick = (e, name) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu tabular>
        <Menu.Item name='home' active={activeItem === 'home'} style={activeItem !== 'home' ? {color: '#fff'} : {color: '#000'}} onClick={this.handleItemClick}><Link to="/">Home</Link></Menu.Item>
        <Menu.Item name='favourites' active={activeItem === 'favourites'} style={activeItem !== 'favourites' ? {color: '#fff'} : {color: '#000'}} onClick={this.handleItemClick}><Link to="/Favourite">Favourite</Link></Menu.Item>
        <Menu.Item name='configurations' active={activeItem === 'configurations'} style={activeItem !== 'configurations' ? {color: '#fff'} : {color: '#000'}} onClick={this.handleItemClick}><Link to="/Configurations">Configurations</Link></Menu.Item>
      </Menu>
    )
  }
}