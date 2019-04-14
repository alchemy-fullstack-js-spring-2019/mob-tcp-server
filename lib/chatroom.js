const shortid = require('shortid');

module.exports = class ChatRoom {
  constructor() {
    this.clients = new Map(); 
  }
  
  createUser(client) {
    client.username = shortid.generate();
    this.clients.set(client.username, client);
    return client;
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(oldUserName, newUserName) {
    if(this.clients.has(newUserName))
      throw 'no user';

    const client = this.clients.get(oldUserName);
    client.username = newUserName;

    this.clients.set(client.username, client);

    this.clients.delete(oldUserName);
  }

  all() {
    return [...this.clients.values()];
  }
};
