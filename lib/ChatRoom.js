const RUG = require('random-username-generator');

class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    const username = RUG.generate();
    client.username = username;
    this.clients.set(username, client);
    return client;
  }

  getClient(username) {
    return this.clients.get(username);
  }
}

module.exports = ChatRoom;
