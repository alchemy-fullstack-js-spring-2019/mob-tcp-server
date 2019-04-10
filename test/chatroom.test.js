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

  it('can get client by user name', () => {
    const client = {};
    const user = chatroom.createUser(client); 
    const object = chatroom.getClient(user.username);
    expect(object.username).toEqual(expect.any(String));
  });

  it('renames the client username', () => {
    const client = {};
    chatroom.createUser(client); 
    chatroom.rename(client.username, expect.any(String));
    expect(client.username).toEqual(expect.any(String));
  });

  it('cant rename same as an existing user', () => {
    const client = {};
    const newClientname = {};
    chatroom.createUser(client);
    chatroom.createUser(newClientname);
    chatroom.rename(client.userName, newClientname.userName);
    expect(client.userName).toEqual(newClientname.userName);
  });

  it('returns all users', () => {
    const client = {};
    const client2 = {};
    const client3 = {};
    chatroom.createUser(client);
    chatroom.createUser(client2);
    chatroom.createUser(client3);
    const expected = [client, client2, client3];
    expect(chatroom.allClients()).toEqual(expected);
  });
});
