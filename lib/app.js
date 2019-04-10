const net = require('net');
const Chatroom = require('./chatroom');
const { parseMessage } = require('./parseMessage.js');

const chatroom = new Chatroom();

const server = net.createServer(client => {
  chatroom.add(client);
  console.log(`${client.username} has joined!`);
  
  client.on('data', data => {
    const obj = parseMessage(data.toString());
  
    if(obj.command === 'all') {
      console.log(`(ALL:) ${client.username}: ${obj.text}`);
      chatroom.clients.forEach(user => {
        user.write((`(ALL:) ${client.username}: ${obj.text}`));
      });
      
    } else if(obj.command === 'nick'){
      const oldName = client.username;
      chatroom.rename(client.username, obj.arg);
      console.log(`${oldName} changed their name to ${client.username}`);

    } else if(obj.command === 'dm') {
      const reciever = chatroom.getClient(obj.arg);
      reciever.write(`${client.username} whispers: ${obj.text}`);
      
    } else {
      console.log('Please input a valid string: \n Valid Input Types: @all: <message>, @dm:<recipient> <message>, @nick:<desired username>');
    }
  });
  
  client.on('end', () => {
    chatroom.removeClient(client);
  });
});

module.exports = {
  server
};
