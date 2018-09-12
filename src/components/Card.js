import React, {Component} from 'react';
import { SwatchesPicker } from 'react-color';
import { Modal } from 'semantic-ui-react';




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

    setPlinthColour(colour, url="http://"+this.props.cardTitle.toString()+".sensilab.monash.edu/light?r=") {
        const rgbColour = this.convertHexToRGB(colour);
        console.log(rgbColour);
        fetch(url + rgbColour[0].toString() + '&g=' + rgbColour[1].toString() + '&b=' + rgbColour[2].toString()).catch(console.log("oops"));
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
            width:  '200px',
            height: '200px',
            border: "solid 2px " + (this.state.clicked ? "red" : "green"),
            background: this.state.color,
            borderRadius: "50% 50%",
            zIndex: "1",
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
                {
                this.state.clicked?
                //CHANGE THIS OPEN METHOD IF YOU WANT TO MAKE IT STOP BEING SHIT
                    <Modal size={'tiny'} open={this.state.clicked} style={{alignitems:'center'}}>
                        <Modal.Header>COLORSSSSS</Modal.Header>
                        <Modal.Content alignitems='center'>
                            <div style={{justifyContent:'center', height:'100%', width:'100%',marginLeft:'auto', marginRight:'auto', fill: "#fff"}}><SwatchesPicker onChangeComplete={this.handleChange} style={{alignItems: 'center', marginLeft:'auto', marginRight: 'auto', width:'80%'}}/></div>
                        {
                            //<div style={{justifyContent:'center', height:'100%', width:'100%',marginLeft:'auto', marginRight:'auto', fill: "#000"}}/>
                        }
                        </Modal.Content>
                </Modal> : null
                }
            </div>
        )
    }
}
//                            <div style={{justifyContent:'center', height:'100%', width:'100%',marginLeft:'auto', marginRight:'auto', fill: "#fff"}}><SwatchesPicker onChangeComplete={this.handleChange} style={{alignItems: 'center', marginLeft:'auto', marginRight: 'auto'}}/></div>


export default Card;

