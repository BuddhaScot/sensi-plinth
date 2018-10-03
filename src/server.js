const BASE_URL = "http://7bee32b7.ngrok.io";

class RGBColour {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

class HexColour {
    constructor(hexString) {
        if (hexString.charAt(0) == '#') {
            this.hex = hexString.substring(1, 7);
        } else {
            this.hex = hexString;
        }
    }
    convertToRGB() {
        return RGBColour(parseInt(this.hex.substring(0, 2), 16), parseInt(this.hex.substring(2, 4), 16), parseInt(this.hex.substring(4, 6), 16));
    }
}

export function sendServerRequest(requestString) {
    fetch(BASE_URL + requestString).then((data) => data.json).then((response) => {
        console.log(response);
        return [response, false];
    }).catch((err) => {
        return [returnError(err), true];
    })
}

function returnError(errorString) {
    // parse the error here based on what the server returns
    return errorString;
}

export function getPlinthData(all=true, plinth) {
    let requestString ="";
    console.log(all); 
    if (all) {
        // send a request to the server to get all plinths status'
        requestString = "/get_status.php?plinth_id=-1";
    } else {
        // just get data of the plinth specified
        requestString = "/get_status.php?plinth_id=" + plinth;
    }

    let response = sendServerRequest(requestString);
    console.log(response, "HERE");
    if (response[1] === true) {
        // an error occured.
        console.log("uh oh spaghetti-os")
    } else {
        // everything went as planned
        console.log("hell yeah. Ya boi did it.")
        console.log(response)
    }
}

function changeLight(plinthId, rgbColor) {
    // request server to change plinthID to the specified colour 
    let requestString = "/change.php?plinth_id=" + plinthId + "&r=" + rgbColor.r + "&g=" + rgbColor.g + "&b=" + rgbColor.b + "&w=" + rgbColor.w;
    let response = sendServerRequest(requestString);
}

function addNewPlinth(plinthId, url) {
    // request server to add a new plinth to the database
    let requestString = "/add.php?id=" + plinthId + "&url=" + url;
    let response = sendServerRequest(requestString);
}

function getConfig(configName) {
    // request server to get the details of a specific config
    let requestString = "/get_config.php?name="+configName;
    let response = sendServerRequest(requestString)
}

function getConfigList(configName) {
    // request server to get all configs available and their data
    let requestString = "/get_config.php?name="+configName;
    let response = sendServerRequest(requestString)
}

function updateConfig(configName, configData) {
    // request server to update config
    let requestString = "/update_config.php?name="+configName;
    // ASK LJ ABOUT CONFIG DATA. why?
}

function setStatus(){
    let requestString = "/set_status.php";
    let response = sendServerRequest(requestString)
}
