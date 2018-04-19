console.log("Welcome to the master blaster!")
const client = require('bitcoin-core')
client.getInfo().then((help) => console.log(help));