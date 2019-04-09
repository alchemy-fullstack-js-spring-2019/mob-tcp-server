const ChatRoom = require('../lib/chatroom');

describe('CHAT ROOM TESTS', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('stores username in chatroom', () => {
    const client = {};
    const result = chatroom.createUser(client);
    expect(result.username).toEqual(expect.any(String));
    expect(client.username).toEqual(result.username);
  });

});
