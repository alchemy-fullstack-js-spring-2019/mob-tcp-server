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

  removeClient(username) {
    this.clients.delete(username);
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(username, newUsername) {
    
    if(this.clients.has(newUsername)) {
      return false;
    } else {
      const currentClient = this.clients.get(username);
      currentClient.username = newUsername;
      this.removeClient(username);
      this.clients.set(newUsername, currentClient);
      return this.clients.get(newUsername);
    }
  }
  
  allClients() {
    return [...this.clients.values()];
  }
};
