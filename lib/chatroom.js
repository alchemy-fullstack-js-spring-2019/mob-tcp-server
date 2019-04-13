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
};

// all() {
//   // this.clients
// }

// Test that calling .all() on the chat room returns an array of all clients
// Hint: Use the following to get all values from a map (example assumes map is stored as this.clients):
// return [...this.clients.values()];

//ryan's example:
//const client = {};
//   chatroom.add(client);
// chatroom.rename(client.username, 'ryan');
// const result = chatroom.getClient('ryan');
// expect(client).toEqual(result);
// expect(client.username).toEqual('ryan');
