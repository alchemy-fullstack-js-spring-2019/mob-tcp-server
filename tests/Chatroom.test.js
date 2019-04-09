const Chatroom = require('../lib/Chatroom');

describe('Chatroom class', () => {
    let chatroom = null;
    let client = null;
    let userObj = null;
    beforeEach(() => {
        chatroom = new Chatroom();
        client = {};
        userObj = chatroom.add(client);
    });

    it('chatroom instance takes a socket', () => {
        expect(userObj.userName).toEqual(expect.any(String));
        expect(userObj.userName).toEqual(client.userName);
    });
    // it('adds a second user', () => {
    //     const clientTwo = {};
    //     const resultOne = chatroom.add(client);
    //     const resultTwo = chatroom.add(clientTwo);
    // });
    it('gets client object added in "add" method', () => {
        chatroom.getClient(userObj.userName);
        expect(userObj).toEqual(client);
    });

    it('renames a user', () => {
        chatroom.rename(userObj.userName, 'ryan');
        expect(chatroom.getClient(userObj.userName)).toBeFalsy();
        expect(chatroom.getClient('ryan')).toEqual({ 'userName': 'ryan' });
    });

    it('does not rename if newUserName matches existing userName', () => {
        const testUser = { userName: 'ryan' };
        chatroom.allUsers.set('ryan', testUser);
        expect(chatroom.rename(testUser.userName, 'ryan')).toBeFalsy();
    });
});
