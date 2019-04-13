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

  //ryan's example:
  //const client = {};
  //   chatroom.add(client);
  // chatroom.rename(client.username, 'ryan');
  // const result = chatroom.getClient('ryan');
  // expect(client).toEqual(result);
  // expect(client.username).toEqual('ryan');

  // it('gets all', () => {
  //   client1{};
  //   client2{};
  //   client3{}:
  //GETALL
  //   const client1 = chatroom.add(client1);
  //   const client2 = chatroom.add(client2);
  //   const client3 = chatroom.add(client3);
  // //I added const client
  //   const results = chatroom.all();
  //   expect(results).toContainEqual(client1);
  //   expect(results).toContainEqual(client2);
  //   expect(results).toContainEqual(client3);

  //(and some other stuff in chatroom.js I think)
  //})

});
