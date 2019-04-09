const Chatroom = require('../lib/Chatroom');
const uuid = require('uuid/v4');

describe('Chatroom class', () => {
    let chatroom = null;
    let client = null;
    beforeEach(() => {
        chatroom = new Chatroom();
        client = {};
    });

    it('chatroom instance takes a socket', () => {
        const result = chatroom.add(client);
        expect(result.userName).toEqual(expect.any(String));
        expect(result.userName).toEqual(client.userName);
    });
    // it('adds a second user', () => {
    //     const clientTwo = {};
    //     const resultOne = chatroom.add(client);
    //     const resultTwo = chatroom.add(clientTwo);
    // });
    it('gets client object added in "add" method', () => {
        const userObj = chatroom.add(client);
        chatroom.getClient(userObj.userName);
        expect(userObj).toEqual(client);
    });
});
