const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

const client = net.createConnection(7890, '192.168.1.55', () => {
    rl.prompt();
    rl.on('line', line => {
        client.write(line);
        rl.prompt();
    });
});

client.setEncoding('utf8');

client.on('data', data => {
    rl.prompt();
    rl.write(`${data}\n`);
});
