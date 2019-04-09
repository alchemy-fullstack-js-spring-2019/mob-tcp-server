const uuid = require('uuid/v4');

class Chatroom {
    constructor() {
        this.allUsers = [];
    }
    add(client, callback) {
        client.userName = uuid();
        this.allUsers.push(client);
        callback(client.userName);
    }
}

module.exports = Chatroom;
