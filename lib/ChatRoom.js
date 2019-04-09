const net = require('net');
const readline = require('readline');
const fs = require('fs');
const uuid = require('uuid/v4');

class ChatRoom {
  constructor(){
    this.allClients = new Map();
  }
  
  add(client) {
    const userName = `user${uuid().slice(0, 4)}`;
    client.userName = userName;
    return this.allClients.set(userName, client);
  }

  getClient(userName) {
    console.log(this.allClients.get(userName));
    return this.allClients.get(userName);
    // takes username from add call
    // returns client object same as supplied to add call
  }
  
}
  
module.exports = ChatRoom;
