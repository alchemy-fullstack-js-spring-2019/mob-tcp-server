const net = require('net');
const readline = require('readline');
const chatroom = require('../chatroom');
const parse = require('../parse.js');

console.log('just storing', chatroom, parse);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '🤯 '
});

// const server = net.createServer(socket => {
//   console.log('client connected');
//   socket.pipe(socket);
// });

const client = net.createConnection(51324, '192.168.1.155', () => {
  console.log('we connected');

  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });
});

client.on('data', data => {
  console.log(data.toString());
  // const message = parse(data.toString);
  // console.log(message);
  rl.prompt();
});

//module.exports = server;
