const ChatRoom = require('../lib/chatroom');

describe('chat room test', () => {
    let chatRoom = null;
    let user1 = {};
    let clientObject = null;

    beforeEach(() => {
        chatRoom = new ChatRoom;
        clientObject = chatRoom.add(user1);
    });

    it('chat room instance adds a client', () => {
        expect(clientObject.username).toEqual(expect.any(String));
    });

    it('get client object by username', () => {
        const userObj = chatRoom.getClient(clientObject.username);
        expect(userObj).toEqual(clientObject);
    });

    it('on chatRoom.rename, return new username', () => {
        const newUserName = 'banana';
        const nameFromMap = chatRoom.renameClient(clientObject.username, newUserName);
        const notAUser = chatRoom.renameClient('dingdong', newUserName);
        expect(nameFromMap).toEqual(newUserName);
        expect(notAUser).toBeFalsy();
    });
});
