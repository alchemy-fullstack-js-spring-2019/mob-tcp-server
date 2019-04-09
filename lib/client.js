const net = require('net');
const readline = require('readline');

const client = net.createConnection(9990, '192.168.1.180', () => {
    console.log('client connected');
});
