const net = require('net');
const Chatroom = require('./chatroom');
const { parseMessage } = require('./parseMessage.js');

const chatroom = new Chatroom();

const server = net.createServer(client => {
  chatroom.add(client);
  console.log(`${client.username} has joined!`);
  
  client.on('data', data => {
    const obj = parseMessage(data.toString());
    if(obj === null) {
      client.write('Please input a valid string: \nValid Input Types:\n @all: <message>,\n @dm:<recipient> <message>,\n @nick:<desired username>');
      return;
    }
    
    if(obj.command === 'all') {
      console.log(`(ALL:) ${client.username}: ${obj.text}`);
      chatroom.allClients()
        .forEach(user => {
          user.write((`(ALL:) ${client.username}: ${obj.text}`));
        });
      
    } else if(obj.command === 'nick'){
      const oldName = client.username;
      chatroom.rename(client.username, obj.arg);
      console.log(`${oldName} changed their name to ${client.username}`);
      client.write(`You changed your name from ${oldName} to ${client.username}`);

    } else if(obj.command === 'dm') {
      if(!chatroom.clients.has(obj.arg)) {
        console.log(`Sorry! Recipient (${obj.arg}) does not exist`);
        client.write(`Sorry! Recipient (${obj.arg}) does not exist`);
        return;
      }

      const reciever = chatroom.getClient(obj.arg);
      reciever.write(`${client.username} whispers: ${obj.text}`);
      console.log(`${client.username} sent a secret message to ${reciever.username}... shh!`);

    } else {
      client.write('Please input a valid string: \nValid Input Types:\n @all: <message>,\n @dm:<recipient> <message>,\n @nick:<desired username>');
    }
  });
  
  client.on('end', () => {
    const leaver = client.username;
    chatroom.removeClient(client);
    console.log(`${leaver} has left the chatroom!`);
  });
});

module.exports = {
  server
};
