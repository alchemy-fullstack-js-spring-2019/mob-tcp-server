const net = require('net');

const server = net.createServer(client => {
    console.log('client connected!');
    client.on('data', data => {
        console.log(data.toString());
        client.write(`ECHO FRO SERVER: ${data}`);
    });
});

module.exports = { server };

//set up prompt functionality
//set up readline functionality
//use a readline to read a line and bring it back to the server and make it communicate back and forht
//then give it paramerstsre, (when user input  x, do y)
