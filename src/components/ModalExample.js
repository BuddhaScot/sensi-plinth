import React from 'react'
import { SwatchesPicker } from 'react-color';
import { Button, Modal } from 'semantic-ui-react'

/*function convertHexToRGB(hexValue) {
  return [parseInt(hexValue[1] + hexValue[2], 16), parseInt(hexValue[3] + hexValue[4], 16), parseInt(hexValue[5] + hexValue[6], 16)];
}*/

/*function setPlinthColour(colour, url="http://plinth5.sensilab.monash.edu/light?r=") {
  const rgbColour = convertHexToRGB(colour);
  console.log(rgbColour);
  fetch(url + rgbColour[0].toString() + '&g=' + rgbColour[1].toString() + '&b=' + rgbColour[2].toString())
    .catch(console.log("oops"));
}*/

function handleColourPick(colour) {
  //setPlinthColour(colour.hex);
  this.props.submit(colour);
}

const ModalExample = (plinthName) => (
  //<Modal trigger={<Card cardTitle = {"Testing"} cardContent={"rih"} key={101}/>} style={{justifyItems: 'right'}}>
 <Modal trigger={<Button>Show Colour Picker</Button>} style={{justifyItems: ''}}>
    <Modal.Header>COLORSSSSS</Modal.Header>
    <Modal.Content>
    <div style={{textAlign: 'right', display: 'block', position:'relative'}}><SwatchesPicker onChangeComplete={handleColourPick}/></div>
    </Modal.Content>
  </Modal>
)
//<SketchPicker onChangeComplete={handleColourPick} style={{marginLeft: "auto", marginRight: "auto", align: 'center'}}/>


export default ModalExample
