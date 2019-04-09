const net = require('net');
const readline = require('readline');
const fs = require('fs');
const ChatRoom = require('./lib/app');

const server = net.createServer(client => {
  console.log('server running');
  //creates new chatroom
  const chatRoom = new ChatRoom();
  client.on('data', data => {
    const newUser = chatRoom.add();
    // obj looks like: { username: 'user27' }, 
    //use .add(user) method here
    client.write(data);
    console.log(data.toString());
  });
});

module.exports = server;