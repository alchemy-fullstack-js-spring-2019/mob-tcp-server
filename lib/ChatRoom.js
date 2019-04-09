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
    return this.allClients.get(userName);
  }

  rename(userName, newUserName) {
    if(this.allClients.has(newUserName)) return console.log('That username already exists! Please choose another.');
    const client = this.allClients.get(userName);
    client.userName = newUserName;
    this.allClients.delete(userName);
    return this.allClients.set(newUserName, client);
  }
  
}
  
module.exports = ChatRoom;
