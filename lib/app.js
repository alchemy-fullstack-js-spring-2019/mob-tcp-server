const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatRoom = new ChatRoom();

const server = net.createServer(client => {
  chatRoom.add(client);
  client.on('data', data => {
    const parsed = parseMessage(data);
    
  });
});
