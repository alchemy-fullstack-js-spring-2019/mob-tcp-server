const ChatRoom = require('../lib/chatroom');

describe('chat room test', () => {
    let chatRoom = null;
    let user1 = {};
    let user2 = {};
    let user3 = {};
    let clientObject = null;

    beforeEach(() => {
        chatRoom = new ChatRoom;
        clientObject = chatRoom.add(user1);
        chatRoom.add(user2);
        chatRoom.add(user3);
    });

    it('chat room instance adds a client', () => {
        expect(clientObject.username).toEqual(expect.any(String));
    });

    it('get client object by username', ()=>{
        const userObj = chatRoom.getClient(clientObject.username);
        expect(userObj).toEqual(clientObject);
    });
});
