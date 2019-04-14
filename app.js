const net = require('net');
const readline = require('readline');
const ChatRoom = require('./lib/chatroom');
const chatroom = new ChatRoom();
const { parseMessage } = require('./lib/parse.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '🤯 '
});

const server = net.createServer(socketClient => {
  console.log('client connected');
  chatroom.createUser(socketClient);
  socketClient.on('data', data => {
    const message = parseMessage(data.toString());

    switch(message.command) {
      case 'all':
        chatroom.all()
          .forEach(client => client.write(`${socketClient.username} (DM): ${message.text}`)); 
        break;
      case 'dm':
        chatroom.getClient(message.arg);
        client.write(`${client.username}: ${message.text}`);
        break;
      case 'reNick':
        chatroom.rename(socketClient.username, message.arg);
        chatroom.all()
          .forEach(client => client.write(`${socketClient.username} has changed their user name to ${message.arg}`));
        break;
      default:
        socketClient.write('Messages must be formatted: @all (message), or @nickname:NewUserName (message), or @dm:recipient (message)');
    }
  });
});

const client = net.createConnection(51324, '192.168.0.141', () => {
  console.log('we connected');

  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });
});

client.on('data', data => {
  const message = parseMessage(data.toString);
  client.write(message);
  rl.prompt();
});

module.exports = { server };
