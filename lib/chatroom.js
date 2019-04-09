const shortid = require('shortid');

module.exports = class ChatRoom {
  constructor() {
    this.users = new Map();
    
  }
  
  createUser(client) {
    client.username = shortid.generate();
    this.users.set(client.username, client);
    return client;
  }

  getClient() {
    // this.users.get()
  }

  all() {
    // this.clients
  }

};
