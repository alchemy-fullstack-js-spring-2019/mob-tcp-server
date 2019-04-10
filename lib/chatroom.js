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
    if(this.users.has(newUserName)) {
      return false;
    } else {
      const updateUserName = this.users.get(username);
      const newUserNameObj = { ...updateUserName };
      console.log('NEWUSER', newUserNameObj);
      newUserNameObj.username = newUserName;
      this.users.delete(username); 
      this.users.set(newUserName, newUserNameObj);
      return true;
    }
  }

  allClients() {
    const allUsers = [...this.users.values()];
    console.log('***\n', allUsers);
    return allUsers;
  }
};
