import React from 'react'
import { List, Segment, Button, Modal, Form } from 'semantic-ui-react'
import ErrorMessage  from '../ErrorMessage';
import MyMenu from '../MyMenu';
import {Link} from 'react-router-dom';
import '../../App.css';
import '../../server';
import { getConfigList, getConfig, addConfig, deleteConfig, changeLight} from '../../server';

class Configurations extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            plinths: this.props.plinths,
            activeConfig: "",
            //configurations: ["LJ", "Cam", "Elliott", "Test"],
            configurations: [],
            data: {
                ID: "",
            },
            errors: {}
        }
        getConfigList().then((data) => {
            console.log("HERE", data)
            if (data[0] === []){
                console.log("No Configurations in Database")
                return [];
            }
            else {
                this.setState({
                    configurations: data[0],
                    data: this.state.data,
                })
            }
        }).catch((error) => {
            console.log("An Error has occurred: " + error);
        })
    }

    getAllConfigurations(){
        getConfigList().then((data) => {
            console.log("HERE", data)
            if (data[0] === []){
                console.log("No Configurations in Database")
                return [];
            }
            else {
                return data[0];
            }
        }).catch((error) => {
            console.log("An Error has occurred: " + error);
        })
        //return ["LJ", "Cam", "Elliott", "Test"]
    }

    handleAddEvent(){
        this.setState({configurations: this.state.configurations.concat(["Test"])})
    }

    onChange = (e) =>{
        console.log(e.target.name);
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        })
        console.log(this.state.data.ID)
    };

    Submit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0){
            // Stuff is valid and good to go 
            addConfig(this.state.data.ID).then((data) => {
                if (data[1] === true){
                    console.log("An Error has occurred with the DB")
                }
                else { 
                    console.log("Great Success")
                }
            }).catch((error) => {console.log(error)})
            /*this.setState({
                configurations: this.getAllConfigurations()
            })*/
            this.setState({
                configurations: this.state.configurations.concat([this.state.data.ID]),
            })
        }
    }

    validate = (data) => {
        const errors = {};
        if (!data.ID) errors.ID = "ID cannot be blank";
        return errors;
    }

    handleEdit(ID) {
        console.log("item: ", ID)
        // get that config and then pass it into favourites

        getConfig(ID).then((data)=>{
            console.log(data);
            if(data === "Failed"){
                console.log("Get Config Failed")
            }
            else { 
                console.log("Get Config Success: ", data)
                
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    handleDelete(ID) {
        console.log("DELETING: ", ID);

        deleteConfig(ID).then((data) => {
            if (data[1] === true){
                console.log("Errors 4 dayz")
            }
            else {
                console.log(ID, " Deleted")
                this.getAllConfigurations();
            }

        }).catch((error) => {
            console.log("Uh Oh: ", error.toString())
        })

    }
    handleUse(ID) {
        const thisConfigData = getConfig(ID).then((data)=>{
            if(data === "Failed"){
                console.log("Get Config Failed")
            }
            else { 
                console.log("Get Config Success: ", data) 
                console.log(data.length)
                for (let i = 0; i < data.length; i++){
                    console.log(data[0][i])
                    this.setPlinthColour({r: data[0][i].r, g:data[0][i].g, b: data[0][i].b, w: 0}, data[0][i].plinth_id)
                }
            }
        }).catch((error) => {
            console.log(error);
        })
        
    }

    setPlinthColour(rgbw, ID) {
        const plinth_id = ID;

        console.log("Plinth: ", plinth_id, " updating Colour")
        console.log(plinth_id, rgbw)
        changeLight(plinth_id, rgbw).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log("uh oh: ", error);
        })
    }

    render() { 
        const {data, errors} = this.state;
        return(
            <Segment inverted style={{height:'100%'}}>
                <List divided inverted relaxed >
                <h1 style={{float: 'center', textAlign:'center'}}>Configurations</h1>
                <MyMenu activeItem={"configurations"}/> 

                <Modal trigger={<Button primary style={{float:'right', borderRadius:'20% 20%'}} close={this.state.closed}>Add Config</Button>}>
            <Modal.Header>Add a Configuration</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                <Form unstackable onSubmit={this.Submit}>
                    <Form.Field required>
                        <label>configuration Name</label>
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
                    <Button primary style={{marginLeft:'40%'}} onClick={this.onSubmit}>Submit</Button> 
                </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>

        <List divided verticalAlign='middle'/>
            {
                this.state.configurations.map((item, index) => {
                    return <List.Item style={{marginTop:"10px"}}>
                    <List.Content floated='right'>
                        <Button primary floated='right' onClick={() => {this.handleUse(item)}}>Use</Button>
                        <Link to={{pathname: '/Favourite', data: item}}><Button primary floated='right'onClick={() => { this.handleEdit(item)}}>Edit</Button></Link>
                        {
                            item !== "current" ? 
                            <Button primary floated='right'onClick={() => { this.handleDelete(item)}}>Delete</Button>
                            : null
                        }
                    </List.Content>
                    <List.Content style={{color: "#fff"}}>{item}</List.Content></List.Item>;})
            }
        </List>
        </Segment>
        )
    }
}
//                <div style={{width:'100%', marginBottom:'10px'}}><Button primary floated='right' onClick={() => {this.setState({configurations: this.state.configurations.concat(["Test"])})}}> Add </Button></div>

export default Configurations;