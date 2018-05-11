# hgktb
heaps ghetto komodo transaction blaster - html5 game and nodejs web socket server for really basic comms (like it's the 80s).

# tl;dr;
- git clone 
- cd nodejs
- *IMPORTANT* change the send to address from `RSitGaknVxZrJ5n6kqKAjSXhoezteGXnpA` to one you own!!!!
- change index.js `AGAMAUSER` and `AGAMAPASSWORD` to what is in your ~/.komodo/komodo.conf `rpcuser` and `rpcpassword` settings.
- npm install
- nodejs

Then browse to <cloned repo>/kinvadors/index.html
- space to shoot
- arrows left and right
- mobile has button onscreen
  
# Notes

Fairly easy to abuse and requires some integration with firewalls, predefined transactions etc. to prevent abuse. Alternatively implement some JWT auth before loading.

# Remote
- Client side (game): Just change the game.js file connection from localhost to your ip address of installation.
- Server side: change username/password and Asset Chain port number for rpc if not using KMD.

# Shoot directly from Agama
Only use this to test.

In the nodejs file, change `AGAMAUSER` and `AGAMAPASSWORD` to what Agama uses for komodo-cli stuff.
- go into the nodejs dir
- npm install
- node index.js
This will start a web socket server listening on port 12345.

Can be run on a remote node.  Further design required to stop abuse.

Go to the html kinvaders dir (browse from your local machine) and on connection it will get a game id from the 
web socket server.  It could link to anything you really wanted to.

Have UTXOs ready because the server will call sendtoaddress with 0.005
- Missles send 1
- Frag send 1
- Lose send 1
- Win send 1

Change these to sendtomany or sendrawtransaction or other implementations adding whatever hooks you need, i.e. twitter, 
and email, or some other REST service.
