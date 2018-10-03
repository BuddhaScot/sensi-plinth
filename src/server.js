const BASE_URL = "http://4214abe2.ngrok.io";

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

function sendServerRequest(requestString) {
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

function getPlinthData(all=true, plinth) {
    if (all) {
        // send a request to the server to get all plinths status'
        requestString = "/get_status.php?plinth_id=-1";
    } else {
        // just get data of the plinth specified
        requestString = "/get_status.php?plinth_id=" + plinth;
    }
    response = sendServerRequest(requestString);
    if (response[1] == true) {
        // an error occured.
    } else {
        // everything went as planned
    }
}

function changeLight(plinthId, rgbColor) {
    // request server to change plinthID to the specified colour 
    requestString = "/change.php?plinth_id=" + plinthId + "&r=" + rgbColor.r + "&g=" + rgbColor.g + "&b=" + rgbColor.b + "&w=" + rgbColor.w;
    response = sendServerRequest(requestString);
}

function addNewPlinth(plinthId, url) {
    // request server to add a new plinth to the database
    requestString = "/add.php?id=" + plinthId + "&url=" + url;
    response = sendServerRequest(requestString);
}

function getConfig(configName) {
    // request server to get the details of a specific config
}

function getConfigList() {
    // request server to get all configs available and their data
}

function updateConfig(configName, configData) {
    // request server to update config
}
