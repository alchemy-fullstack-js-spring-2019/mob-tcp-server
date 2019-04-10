const net = require('net');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '🤯 '
});

const client = net.createConnection(51324, '192.168.1.155', () => {
  console.log('we connected');

  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });
});

client.on('data', data => {
  console.log(data.toString());
  rl.prompt();
});
