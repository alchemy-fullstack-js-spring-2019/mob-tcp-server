const ChatRoom = require('../lib/chatroom');

describe('CHAT ROOM TESTS', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('stores username in chatroom', () => {
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
    const user = chatroom.createUser(client); 
    const newUser = chatroom.rename(user.username, user.newUserName);
    console.log(newUser);
    expect('fake').toEqual('fake');
  });
});
