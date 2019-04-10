
const net = require('net');
const Chatroom = require('./Chatroom');
const chat = new Chatroom();
const parseMessage = require('./parseMessage');

const server = net.createServer(client => {
    client.setEncoding('utf8');
    chat.add(client);
    client.on('data', data => {
        const message = parseMessage(data.toString());
        if(message.command === 'all') {
            console.log('Are you there God?', message);
            const all = chat.allUsers;
            all.forEach(user => {
                user.write(`${message.text}`);
            });
        }
        if(message.command === 'nick') {
            chat.rename(client.userName, message.arg);
        }

        if(message.command === 'dm') {
            const recipient = chat.getClient(message.arg);
            console.log('recipient', recipient.userName, recipient.writable);
            recipient.write(`${message.text}`, { encoding: 'utf8' });
        }
        
        console.log('client connected');
        client.write(data);
    });
    client.on('end', () => {
        //remove single user method
    });
});

server.listen(7890);
