const net = require('net');
const readLine = require('readline');

class Chatroom  {
  constructor();
}

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const app = net.createConnection(5466, 'localhost', () => {
  console.log('I am connected');
  rl.prompt();
  app.on('data', data => {
    console.log(`\nFrom Server: ${data.toString()}`);
    rl.prompt();
  });
});



// const allClients = [];

// module.exports = net.createServer(connectedClients => {

// })