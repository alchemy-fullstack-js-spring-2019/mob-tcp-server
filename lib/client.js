const net = require('net');
const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = net.createConnection(5466, 'localhost', () => {
  console.log('I am connected');
  rl.prompt();
  
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });
  
  
});

client.setEncoding('utf8');
client.on('data', data => {
  console.log(data);
});

