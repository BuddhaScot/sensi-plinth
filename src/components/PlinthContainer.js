import React from 'react';

import Card from './Card';
// import { Button } from 'semantic-ui-react';


class PlinthContainer extends React.Component {
    state = {
        colors: [],
        selected: []
    }

  render() {

    let listOfItems = ["These", "are", "Different", "plinths", "!!!!", "maybe", "some", "more", "just", "to ", "test", "whether", "it", "works"];
    
    const CentralDiv = {
        height: "1400px",
        width: "800px",
        position: "relative",
        paddingLeft: "auto",
        paddingRight: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        opacity: "1",
        
    }
    const MenuItem = {
        float: "left",
        display: "block",
        position: 'relative',
        marginLeft: "10px",
        marginTop: "10px",
        marginBottom: "10px",
    }
   
    // wwomt
      return (
        <div className="App" style={{alignItems: 'center', backgroundColor: "#1B1C1D", height: "100%", width: "100%"}}>
        <div style={CentralDiv}>
            <span style={MenuItem}><Card cardTitle = {"ALL"} cardContent={""} key={101}/></span>;
            <span style={MenuItem}><Card cardTitle = {"+"} cardContent={""} key={100}/></span>;
            {
            listOfItems.map((item, index) => {
              return <span style={MenuItem}><Card cardTitle={"Plinth " + (index+1)} cardContent={item} key={index}/></span>;})
            }
        </div>
      </div>

      );
  }
}

export default PlinthContainer;