import React from 'react'
import { List, Segment, Button, Modal, Form } from 'semantic-ui-react'
import ErrorMessage  from '../ErrorMessage';
import '../../App.css';

class Configurations extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            plinths: this.props.plinths,
            configurations: ["LJ", "Cam", "Elliott", "Test"],
            data: {
                ID: "",
            },
            errors: {}
        }
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
            this.setState({
                configurations: this.state.configurations.concat([this.state.data.ID])
            })
        }
    }

    validate = (data) => {
        const errors = {};
        if (!data.ID) errors.ID = "ID cannot be blank";
        return errors;
    }

    render() { 
        const {data, errors} = this.state;
        return(
            <Segment inverted style={{height:'100%'}}>
                <List divided inverted relaxed >
                <h1 style={{float: 'center', textAlign:'center'}}>Configurations</h1>
                <Modal trigger={<Button primary style={{float:'right', borderRadius:'20% 20%'}}>Add Config</Button>}>
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
                            <Button primary floated='right'>Use</Button>
                            <Button primary floated='right'>Edit</Button>
                        </List.Content>
                        <List.Content style={{color: "#fff"}}>{item}</List.Content></List.Item>;})
                }
                </List>
            </Segment>
        )
    }
}
//                <div style={{width:'100%', marginBottom:'10px'}}><Button primary floated='right' onClick={() => {this.setState({configurations: this.state.configurations.concat(["Test"])})}}> Add </Button></div>

export default Configurations