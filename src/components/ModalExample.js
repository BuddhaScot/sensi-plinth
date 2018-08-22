import React from 'react'
import { SketchPicker } from 'react-color';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalExample = (plinthName) => (
  <Modal trigger={<Button>Show Colour Picker</Button>}>
    <Modal.Header>COLORSSSSS</Modal.Header>
    <Modal.Content>
    <SketchPicker style={{marginLeft: "auto", marginRight: "auto", align: 'center'}}/>
    </Modal.Content>
  </Modal>
)

export default ModalExample
