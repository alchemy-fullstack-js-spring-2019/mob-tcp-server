const { ChatRoom } = require('./chatroom');

const chatRoom = new ChatRoom;

const net = require('net');

const server = net.createServer(client => {
    const clientObject = { client };
    chatRoom.add(clientObject);
    console.log('client connected!');
    client.on('data', data => {
        if(data.slice(0, 3).toString() === 'all') {
            const socketsArray = chatRoom.call();
            const allSockets = socketsArray.map(each => each.client);
            allSockets.forEach(socket => socket.write(`@${data}`));
        } 
    });
});

module.exports = { server };
