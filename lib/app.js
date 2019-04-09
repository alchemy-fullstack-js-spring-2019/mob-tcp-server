const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
  chatRoom.add(client);
  console.log(`${client.username} has joined the c h a t r o o m`)
  client.on('data', data => {
    const parsed = parseMessage(data.toString());
    if(parsed.command === 'all') {
      
      chatRoom.clients.forEach(item => {
        item.write(`${client.username}: ${parsed.text}`);
      });
    }
    else if(parsed.command === 'nick') {
      chatRoom.rename(client.username, parsed.arg);
    }
    else if(parsed.command === 'dm') {
      const reciever = chatRoom.getClient(parsed.arg);
      reciever.write(`(DM) ${client.username}: ${parsed.text}`);
    }
    else {
      client.write('invalid string');
    }
  });
});
