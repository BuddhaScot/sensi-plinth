import React from 'react';

import Card from './Card';
import { Button, Modal, Form } from 'semantic-ui-react';
import { SwatchesPicker } from 'react-color';
import ErrorMessage  from './ErrorMessage';
import SensiLabS from './SensiLabS';

class PlinthContainer extends React.Component {
    state = {
        colors: "#003366",
        listOfPlinths: [{ID: "1", Item:"These"}, {ID:"2",Item:"are"},{ID:"3",Item:"Different"},{ID:"4",Item:"plinths"}, {ID: "5",Item:"!!!!"}, {ID:"6",Item:"maybe"}, {ID:"7",Item:"some"}, {ID:"8",Item:"more"},{ID:"9",Item:"just"}],
        data: {
            ID: "",
            URL: "",
            color: "#000"
        },
        errors: {}

    }

    changeAllPlinth = (color, event) => {
        console.log(color)
        this.setState({colors: color.toString(), data: this.state.data})
        }

    onChange = (e) =>{
        console.log(e.target.name);
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
    })};

    onColorChange = (color) => {
        //do something here
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0){
            // Stuff is valid and good to go 
            this.setState({
                listOfPlinths: this.state.listOfPlinths.concat([{ID: this.state.data.ID, Item: this.state.data.URL}])
            })
        }
    }

    validate = (data) => {
        const errors = {};
        if (!data.ID) errors.ID = "ID cannot be blank";
        if (! data.URL) errors.URL = "URL cannot be blank "
        return errors;
    }

    render() {
        const {data, errors} = this.state;
        const listOfItems = this.state.listOfPlinths
        const CentralDiv = {
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "right",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginLeft: "auto",
            marginRight: "auto",
            opacity: "1",
        }
    const MenuItem = {
        float: "center",
        alignItems: "center",
        flexGrow: "1",
        position: "relative",
        marginLeft: "10px",
        marginTop: "15px",
        marginBottom: "10px",
        zIndex: "1",
    }
    return (
        <div className="App" style={{alignItems: 'center', backgroundColor: "#1B1C1D", height: "100%", width: "80%", marginLeft:'10%', marginRight: '10%'}}>
         <Modal trigger={<Button primary style={{float:'right', borderRadius:'20% 20%'}}>Add Plinth</Button>}>
            <Modal.Header>Add a Plinth</Modal.Header>
            <Modal.Content image>
                <SwatchesPicker onChange={this.onColorChange}/>
                <Modal.Description style={{marginLeft: "2%"}}>
                <Form unstackable onSubmit={this.Submit}>
                    <Form.Field required>
                        <label>Plinth ID</label>
                        <input
                            type="text"
                            id = "ID"
                            name = "ID"
                            value = {data.ID}
                            onChange={this.onChange}
                            placeholder='plinth 5'/>    
                        {
                            errors.ID && <ErrorMessage text={errors.ID}/>
                        }
                    </Form.Field>
                    <Form.Field required>
                        <label>URL</label>
                        <input 
                            type="text"
                            id = "URL"
                            name = "URL"
                            value = {data.URL}
                            onChange = {this.onChange}
                            placeholder='plinthX.sensilab.monash.edu'/>
                        {
                            errors.URL && <ErrorMessage text={errors.URL}/>
                        }
                    </Form.Field>
                    <Button primary style={{marginLeft:'40%'}} onClick={this.onSubmit}>Submit</Button> 
                </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
        <div style={CentralDiv}>
            <span style={MenuItem}><Card cardTitle = {"ALL"} cardContent={"rih"} key={101} color={this.state.colors} changeAllPlinth ={this.changeAllPlinth.bind(this)}/></span>
            {
            listOfItems.map((item, index) => {
                console.log(item);
              return <span style={MenuItem}><Card cardTitle={"plinth" + (item.ID)} cardContent={item.Item} key={index} color={this.state.colors}/></span>;})
              //return <Button style={MenuItem}><Card cardTitle={"Plinth " + (index+1)} cardContent={item} key={index}/></Button>;})
            }
        </div>
      </div>

      );
  }
}

export default PlinthContainer;