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
    getClient(userName){
        const clientData = this.clients.get(userName.toString());
        return clientData;
    }
    renameClient(userName, newUserName){
        let userObject = this.clients.get(userName.toString());
        if(!userObject) {
            return false;
        }
        this.clients.delete(userName);
        
        userObject.username = newUserName;

        this.clients.set(newUserName, userObject);

        return newUserName;
    }
}

module.exports = ChatRoom;
