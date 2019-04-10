const net = require('net');

const server = net.createServer(client => {
    console.log('client connected!');
    client.on('data', data => {
        console.log(data.toString());
        client.write(`ECHO FRO SERVER: ${data}`);
    });
});

module.exports = { server };
