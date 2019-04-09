const Chatroom = require('../lib/Chatroom');
const uuid = require('uuid/v4');

describe('Chatroom class', () => {
    let chatroom = null;
    let client = null;
    beforeEach(() => {
        chatroom = new Chatroom();
        client = { };
    });

    it('chatroom instance takes a socket', () => {
        chatroom.add(client, userName => {
            expect(client.userName).toEqual(userName);
        });
    });
});
