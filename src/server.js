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
    return fetch(BASE_URL + requestString).then((data) => data.json()).then((response) => {
        return [response, false];
    }).catch((err) => {
        throw [returnError(err), true];
    })
}

function returnError(errorString) {
    // parse the error here based on what the server returns
    return errorString;
}

export function getPlinthData(all=true, plinth) {
    let requestString ="";
    if (all) {
        // send a request to the server to get all plinths status'
        requestString = "/get_status.php?plinth_id=-1";
    } else {
        // just get data of the plinth specified
        requestString = "/get_status.php?plinth_id=" + plinth;
    }
    return sendServerRequest(requestString);
}

function changeLight(plinthId, rgbColor) {
    // request server to change plinthID to the specified colour 
    let requestString = "/change.php?plinth_id=" + plinthId + "&r=" + rgbColor.r + "&g=" + rgbColor.g + "&b=" + rgbColor.b + "&w=" + rgbColor.w;
    return sendServerRequest(requestString);
}

function addNewPlinth(plinthId, url) {
    // request server to add a new plinth to the database
    let requestString = "/add.php?id=" + plinthId + "&url=" + url;
    return sendServerRequest(requestString);
}

function getConfig(configName) {
    // request server to get the details of a specific config
    let requestString = "/get_config.php?name="+configName;
    return sendServerRequest(requestString)
}

function getConfigList(configName) {
    // request server to get all configs available and their data
    let requestString = "/get_config.php?name="+configName;
    return sendServerRequest(requestString)
}

function updateConfig(configName, configData) {
    // request server to update config
    let requestString = "/update_config.php?name="+configName;
    // ASK LJ ABOUT CONFIG DATA. why?
}

function setStatus(){
    let requestString = "/set_status.php";
    return sendServerRequest(requestString)
}
