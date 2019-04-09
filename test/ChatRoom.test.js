const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom tests', () => {
  it('takes a socket, assigns user name, and stores by user name', () => {
    const testChatRoom = new ChatRoom();
    const client = {};
    const username = testChatRoom.add(client);
    expect(client.username).toEqual(username);
  });
});
