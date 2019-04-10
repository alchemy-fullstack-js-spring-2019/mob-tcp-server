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
  it('allows user to rename self', () => {
    const client = {};
    const client2 = {};
    const client3 = {};
    chatroom.add(client);
    chatroom.add(client2);
    chatroom.add(client3);
    chatroom.rename(client.userName, 'new username');
    expect(client.userName).toEqual('new username');
  });
  it('returns cant rename existing user', () => {
    const client = {};
    const client2 = {};
    const client3 = {};
    chatroom.add(client);
    chatroom.add(client2);
    chatroom.add(client3);
    chatroom.rename(client.userName, client2.userName);
    expect(client.userName).toEqual(client.userName);
  });
  it('returns all users in map', () => {
    const client = {};
    const client2 = {};
    const client3 = {};
    chatroom.add(client);
    chatroom.add(client2);
    chatroom.add(client3);
    const expected = [client, client2, client3];
    expect(chatroom.all()).toEqual(expected);
  });
});
