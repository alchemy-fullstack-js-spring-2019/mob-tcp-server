const net = require('net');

const server = net.createServer(client => {
    console.log('client connected!');
    client.on('data', data=> {
        console.log(`from client: ${data}`);
    });
});

server.listen(9990);

module.exports = { server };
