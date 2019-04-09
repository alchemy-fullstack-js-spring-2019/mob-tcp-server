//class Chatroom
module.exports = class Chatroom {
  constructor() {
    this.userNumber = 1;
    this.clients = new Map();
  }

  add(client){
    const username = `user${this.userNumber++}`;
    client.username = username;
    this.clients.set(username, client);
    
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(username, newUsername) {
    if(this.clients.has(newUsername)) {
      return false;
    } else {
      this.clients.delete(username);
      this.clients.set(newUsername, {
        username: newUsername
      });
      return this.clients.get(newUsername);
    }
  }
};
