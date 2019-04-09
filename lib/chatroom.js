//build a constructor here
class ChatRoom {
    constructor() {
        this.num = 1;
        this.clients = new Map();
    }
    add(client){
        const username = `user${this.num}`;
        client.username = username;
        this.num++;
        this.clients.set(username, client);
        return client;
    }
}

module.exports = ChatRoom;
