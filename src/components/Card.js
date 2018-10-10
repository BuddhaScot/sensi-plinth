import React, {Component} from 'react';
import { SwatchesPicker } from 'react-color';
import { Modal, ModalDescription, Button, Header } from 'semantic-ui-react';
import '../App.css';
import { changeLight } from '../server';



class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            color: this.props.color
        };
    }
    convertHexToRGB(hexValue) {
        return [parseInt(hexValue[1] + hexValue[2], 16), parseInt(hexValue[3] + hexValue[4], 16), parseInt(hexValue[5] + hexValue[6], 16)];
    }

    setPlinthColour(colour) {
        const rgbColour = this.convertHexToRGB(colour);
        const rgbVal = {
            r: rgbColour[0],
            g: rgbColour[1],
            b: rgbColour[2],
            w: 0,
        }
        const plinth_id = this.props.cardTitle;
        console.log("Plinth: ", plinth_id, " updating Colour")
        changeLight(plinth_id, rgbVal).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log("uh oh: ", error);
        })
        //console.log(rgbColour);
        //fetch(url + rgbColour[0].toString() + '&g=' + rgbColour[1].toString() + '&b=' + rgbColour[2].toString()).catch(console.log("oops"));

    }

    handleChange = (colorChange, event) => {
        this.setState({clicked: this.state.clicked, color: colorChange.hex});
        this.setPlinthColour(colorChange.hex);

        if (this.props.cardTitle==="ALL"){
            console.log(colorChange.hex)
            this.props.changeAllPlinth(colorChange.hex);
        }
    }

    render() {
        const buttonStyle = {
            justifyContent: 'center',
            alignItems: 'center',
            width:  '180px',
            height: '180px',
            border: "solid 2px " + (this.state.clicked ? "red" : "green"),
            background: this.state.color,
            borderRadius: "100% 100%",
            zIndex: "1",
        }
        
        const textStyle = {
            alignitems: 'right',
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
                <h1 style = { textStyle }>{"Plinth " + this.props.cardTitle}</h1>
                <p style= { textStyleP }>{this.props.cardContent}</p>
                {
                this.state.clicked?
                //CHANGE THIS OPEN METHOD IF YOU WANT TO MAKE IT STOP BEING SHIT
                    <Modal size={"large"} open={this.state.clicked} style={{alignitems:'center'}}>
                        <Modal.Header>Choose a color, any color.</Modal.Header>
                        <Modal.Content image alignitems='center'>
                            <SwatchesPicker onChangeComplete={this.handleChange} style={{alignItems: 'center', marginLeft:'auto', marginRight: 'auto', width:'80%'}}/>
                            <ModalDescription>
                                <Header>Plinth Details</Header>
                                <div style={{width:""}}><Button primary style={{justifyContent:"center", marginLeft:"30%", marginRight:"30%"}}>Edit Plinth Details</Button></div>
                                <p></p>
                                <div><Button primary alignItems="center" style={{justifyContent:'center',marginLeft:"30%", marginRight:"30%"}} onClick={() => {this.props.onDelete(this.props.cardTitle)}}>Delete</Button></div>
                            </ModalDescription>
                        </Modal.Content>
                    </Modal> 
                    : null
                }
            </div>
        )
    }
}

//<div style={{justifyContent:'center', height:'100%', width:'10%',marginLeft:'auto', marginRight:'auto', fill: "#fff"}}>
export default Card;

