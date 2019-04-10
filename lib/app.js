const net = require('net');
const readline = require('readline');
// const fs = require('fs');
const ChatRoom = require('./ChatRoom');
const chatRoom = new ChatRoom();
const parsedMessage = require('./parseMessage');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const server = net.createServer(client => {
  console.log('server running');
  const newUser = chatRoom.add(client);
  //creates new chatroom
  client.on('data', data => {

    const message = parsedMessage(data.toString()); 
    //check command
    //switch is a stand-in for if else statements
    switch(message.command) { 
      case 'all':
        chatRoom.all()
          .filter(c => client !== connectedClient);
          .forEach(client => client.write(`${client.userName}: ${message.text}`));
      case 'dm':
       const dmClient = chatRoom.getClient(message.args);
        dmClient.write(`${client.userName}: ${message.text}`);
      case 'nick':
      chatRoom.rename(client.user, message.args);
      break;
      default:
        client.write('what?');
    }
    // if(message.command === 'nick'){
    //   client.rename(newUser.userName, message.arg);
    //   client.write(`${newUser.userName}: ${data}`);
    //   rl.prompt();
    // }
    // client.write(data);
    // console.log(data.toString());
  });
});

const client = net.createConnection(5500, 'localhost', () => {
  console.log('Connected');
  //add a new client and prompt for message
  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
    //parse line
  });

});

client.on('data', data => {
  console.log(`\n${data.toString()}`);
  rl.prompt();
});

module.exports = server;
