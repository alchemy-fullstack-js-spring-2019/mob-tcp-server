const net = require('net');
const Chatroom = require('./chatroom');
const { parseMessage } = require('./parseMessage.js');
const chatroom = new Chatroom();

const server = net.createServer(client => {
  client.setEncoding('utf8');
  chatroom.add(client);
  console.log('new addon');

  
  client.on('data', data => {
    const dataObj = parseMessage(data);
    if(dataObj.command == '@all') {
      //write message to all users
      console.log(client);
      client.write(`${data}`);
    }
    if(dataObj.command == '@nick') {
      //run rename function
    }
    if(dataObj.command == '@dm') {
      //writes a message to a specific user
    }
    
  });
  
  client.on('end', () => {
    chatroom.removeClient(client);
  });
});

module.exports = {
  server
};
