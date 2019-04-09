const net = require('net');
const readline = require('readline');
const fs = require('fs');
const uuid = require('uuid/v4');

class ChatRoom {
  constructor(){
    this.allClients = new Map();
  }
  
  add(client){
    const userName = `user${uuid().slice(0, 4)}`;
    client.userName = userName;
    return this.allClients.set(userName, client);
  }
  //when new client connects to server
  //create user object w/increment number
  //push new user object to allUsers array
  
  // getClient()
  
}
  
module.exports = ChatRoom;
