const ChatRoom = require('../lib/ChatRoom');

describe('chatroom tests', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new ChatRoom();
  });
  
  it('assigns random user name to user', () => {
    const client = {};
    chatroom.add(client);
    expect(client.userName).toEqual(expect.any(String));
  });
});
