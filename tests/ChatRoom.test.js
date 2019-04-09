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
  it('finds a client based on username', () => {
    const client = {};
    const client2 = {};
    const client3 = {};
    chatroom.add(client);
    chatroom.add(client2);
    chatroom.add(client3);
    expect(chatroom.getClient(client3.userName)).toEqual(client3);
  });
});
