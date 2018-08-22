import React, {Component} from 'react';
//import styled, {css} from 'styled-components'
//import { SketchPicker } from 'react-color';


class Card extends Component {

    constructor(){
        super();
        this.state = {
            clicked: false,
            background: "#fff",
        };
    }

    render() {
        const {clicked} = this.state;
        const buttonStyle = {
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
            height: 200,
            border: "solid 2px " + (clicked ? "red" : "green"),
            background: (clicked ? "green" : "red"),
            borderRadius: "50% 50%",
        }

        const textStyle = {
            alignItems: 'right',
            marginTop: '70px',
            float: 'center',
            color: '#fff',
            textAlign: 'center'
        }
        const textStyleP = {
            color: "#fff",
            alignItems: 'right',
            marginTop: '0px',
            float: 'center',
            textAlign: 'center'
        }
        return (
            <div className = "button" style = { buttonStyle } onClick={()=>{this.setState({clicked: !this.state.clicked});}}>
                <h1 style = { textStyle }>{this.props.cardTitle}</h1>
                <p style= { textStyleP }>{this.props.cardContent}</p>
            </div>
        )
    }
}

export default Card;
