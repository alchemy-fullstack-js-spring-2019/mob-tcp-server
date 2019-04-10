const net = require('net');
const Chatroom = require('./chatroom');
const { parseMessage } = require('./parseMessage.js');

const chatroom = new Chatroom();

const server = net.createServer(client => {
  chatroom.add(client);
  console.log(`${client.username} has joined!`);
  
  client.on('data', data => {
    const obj = parseMessage(data.toString());
  
    if(obj.command === '@all') {
      console.log(`(ALL:) ${client.username}: ${obj.text} yoooo`);
      chatroom.clients.forEach(user => {
        user.write((`(ALL:) ${client.username}: ${obj.text} yoooo`));
      })
      ;
    }

    // if(dataObj.command == '@nick') {
    //   chatroom.rename(client.username, dataObj.arg)
    // }

    // if(dataObj.command == '@dm') {
    //   //writes a message to a specific user
    // }
    
  });
  
  client.on('end', () => {
    chatroom.removeClient(client);
  });
});

module.exports = {
  server
};
