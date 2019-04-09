const app = require('./lib/app.js');
const net = require('net');

//app.listen

//below goes into app
const server = net.createServer(client => {
  console.log('Client has connected!');

  client.on('data', data => {
    console.log(data.toString('utf8'));
    client.write(`\n\tThis is what you said to me: ${data.toString('utf8')}`);
  });
});

server.listen(5466);
