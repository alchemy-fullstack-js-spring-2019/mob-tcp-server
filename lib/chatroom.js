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

  getClient(username) {
    return this.users.get(username);
  }

  rename(username, newUserName) {
    if(this.users.has(username)) {
      // get it
      const oldUserName = this.users.get(username);
      // store it
      
      // set newusername to this.users
      this.users.set(username, newUserName);
      // delete it from this.users
      this.users.delete(oldUserName); 

    } else {
      throw 'no user'; 
    }
  }

  all() {
    // this.clients
  }

};
