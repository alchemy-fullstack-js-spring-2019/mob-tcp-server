const net = require('net');
////////// needs to go to app.js ->
const server = net.createServer(socket => {
  console.log('client connected');

  socket.pipe(socket);
});
console.log(server);
///////////


//////// correct
const app = require('./app');
app.listen(51324);
///////// correct
