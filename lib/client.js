const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '$ '
});

const client = net.createConnection(9990, '192.168.1.180', () => {
    console.log('client connected');
    rl.prompt();
    rl.on('line', line=> {
        client.write(line);
        rl.prompt();
    });
});
