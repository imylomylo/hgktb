# hgktb
heaps ghetto komodo transaction blaster

# Shoot directly from Agama
Only use this to test.

In the nodejs file, change `AGAMAUSER` and `AGAMAPASSWORD` to what Agama uses for komodo-cli stuff.
- go into the nodejs dir
- npm install
- node index.js
This will start a web socket server listening on port 12345.

Go to the html kinvaders dir (browse from your local machine) and on connection it will get a game id from the 
web socket server.  It could link to anything you really wanted to.

Have UTXOs ready because the server will call sendtoaddress with 0.005
- Missles send 1
- Frag send 1
- Lose send 1
- Win send 1

Change these to sendtomany or sendrawtransaction or other implementations adding whatever hooks you need, i.e. twitter, 
and email, or some other REST service.
