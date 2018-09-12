import React from 'react'
import { List, Segment, Button } from 'semantic-ui-react'


class Configurations extends React.Component{ 
    constructor(){
        super();
        this.state = {
            configurations: ["LJ", "Cam", "Elliott", "Test"]
        }
    }
    handleAddEvent(){
        this.setState({configurations: this.state.configurations.concat(["Test"])})
    }

    render() { 
        //const configurations = ["LJ", "Cam", "Elliott", "Test"]
        return(
            <Segment inverted style={{height:'1000px'}}>
                <List divided inverted relaxed >
                <h1 style={{float: 'center', textAlign:'center'}}>Configurations</h1>
                <div style={{width:'100%', marginBottom:'10px'}}><Button primary floated='right' onClick={() => {this.setState({configurations: this.state.configurations.concat(["Test"])})}}> Add </Button></div>
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
export default Configurations