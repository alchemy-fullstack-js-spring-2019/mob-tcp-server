const RUG = require('random-username-generator');

class ChatRoom {
  constructor(){

  }

  add(client) {
    const username = RUG.generate();
    console.log(username);
    client.username = username;
    return username;
  }
}

module.exports = ChatRoom;
