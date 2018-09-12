class Plinth{
    constructor(URL, position, colour){ 
        this.colour = colour;
        this.position = position;
        this.ID= URL;
    }

    getID(){ 
        return this.ID;
    }
    getPosition(){
        return this.position;
    }
    getColour(){
        return this.colour;
    }

    resetColour(colour){
        this.colour = colour;
    }
}

export default Plinth;