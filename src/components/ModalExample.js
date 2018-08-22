import React from 'react'
import { SketchPicker } from 'react-color';
import { Button, Modal } from 'semantic-ui-react'

function convertHexToRGB(hexValue) {
  return [parseInt(hexValue[1] + hexValue[2], 16), parseInt(hexValue[3] + hexValue[4], 16), parseInt(hexValue[5] + hexValue[6], 16)];
}

function setPlinthColour(colour, url="http://plinth5.sensilab.monash.edu/light?r=") {
  const rgbColour = convertHexToRGB(colour);
  console.log(rgbColour);
  fetch(url + rgbColour[0].toString() + '&g=' + rgbColour[1].toString() + '&b=' + rgbColour[2].toString())
    .catch(console.log("oops"));
}

function handleColourPick(colour) {
  setPlinthColour(colour.hex);
}

const ModalExample = (plinthName) => (
  <Modal trigger={<Button>Show Colour Picker</Button>}>
    <Modal.Header>COLORSSSSS</Modal.Header>
    <Modal.Content>
    <SketchPicker onChangeComplete={handleColourPick} style={{marginLeft: "auto", marginRight: "auto", align: 'center'}}/>
    </Modal.Content>
  </Modal>
)

export default ModalExample
