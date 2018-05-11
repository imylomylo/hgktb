console.log("Welcome to the master blaster!")
////////////////////////
// stdrpc
const stdrpc = require('stdrpc')
// const rpc = stdrpc("http://localhost:11607/", { // PIZZA
const rpc = stdrpc("http://localhost:7771/", {
    req: {
        auth: {
			username: "AGAMAUSER",
			password: "AGAMAPASSWORD"
		}
    }
});
// guid
const uuidv4 = require('uuid/v4')
let _uuid = uuidv4()
console.log("This UUID: " + _uuid)
const aguid = require('aguid')
let _gameid  = aguid(_uuid)
console.log("Game ID: " + _gameid)
////////////////////////
// websocketserver stuff to test
console.log("Server started");
var Msg = '';
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ port: 12345 });
wss.on('connection', function (ws) {
    console.log("CONNECTION GET GAMEID & ASSOCIATE TRANSACTIONS");
    const gameid = {GAMEID:_gameid}
    rpc.getinfo().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)  
    });
    ws.send(JSON.stringify(gameid)); // AND SEND RAW TX AVAILABLE TO SEND FOR THIS GAME
    ws.on('message', function (message) {
        if( message == 'MISSILE'){
            console.log('SEND SINGLE 1 TX')
            rpc.sendtoaddress('RSitGaknVxZrJ5n6kqKAjSXhoezteGXnpA',0.0005).then(resp => {
                console.log(resp)
            }).catch(error => {
                console.log(error)  
            });
        }else if( message == 'FRAG'){
            console.log('SEND MANY 100 TX')
            rpc.sendtoaddress('RSitGaknVxZrJ5n6kqKAjSXhoezteGXnpA',0.0005).then(resp => {
                console.log(resp)
            }).catch(error => {
                console.log(error)  
            });
        }
        else if( message == 'LOSE'){
            console.log('POST TO BLOCKCHAINWR WITH MENTION GAMER & SCORE')
            rpc.sendtoaddress('RSitGaknVxZrJ5n6kqKAjSXhoezteGXnpA',0.0005).then(resp => {
                console.log(resp)
            }).catch(error => {
                console.log(error)  
            });
        }else if( message == 'WIN'){
            console.log('POST TO BLOCKCHAINWR WITH CONGRATS TO GAMER')
            rpc.sendtoaddress('RSitGaknVxZrJ5n6kqKAjSXhoezteGXnpA',0.0005).then(resp => {
                console.log(resp)
            }).catch(error => {
                console.log(error)  
            });
        }
        ws.send('Server received from client: ' + message);
    });
});