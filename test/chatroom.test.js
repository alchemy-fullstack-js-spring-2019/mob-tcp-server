const ChatRoom = require('../lib/chatroom');

describe('CHAT ROOM TESTS', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('stores client socket/username in chatroom', () => {
    const client = {};
    const result = chatroom.createUser(client); 
    // result = created object within all users array
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
    expect(client.username).not.toMatch('Henrietta');
    chatroom.rename(client.username, 'Henrietta');
    expect(client.username).toEqual('Henrietta');
  });

  it('get all function', () => {
    const client1 = {};
    const client2 = {};
    const client3 = {};

    chatroom.createUser(client1);
    chatroom.createUser(client2);
    chatroom.createUser(client3);

    const allClients = chatroom.all();

    expect(allClients).toContain(client1);
    expect(allClients).toContain(client2);
    expect(allClients).toContain(client3);
  });
});
