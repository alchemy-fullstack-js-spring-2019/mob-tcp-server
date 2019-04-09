const uuid = require('uuid/v4');

class Chatroom {
    constructor() {
        this.allUsers = new Map();
    }
    add(client) {
        const id = uuid();
        client.userName = id;
        this.allUsers.set(`${id}`, client);
        return client;
    }
}

module.exports = Chatroom;
