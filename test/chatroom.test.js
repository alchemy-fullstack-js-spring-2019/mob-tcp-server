const Chatroom = require('../lib/chatroom.js');

describe('chatroom tests', () => {
  let chatroom = null;
  let client1 = {};
  let client2 = {};
  let client3 = {};

  beforeEach(()=> {
    chatroom = new Chatroom();
    chatroom.add(client1);
    chatroom.add(client2);
    chatroom.add(client3);
  
  });
  
  it('add method is working', () => {
    expect(client1.username).toEqual(expect.any(String));
    expect(client1.username).toEqual('user1');
  });

  it('get client', () => {
    const result = chatroom.getClient('user1');
    expect(result).toEqual(client1);
  });

  it('rename client', () => {
    const username = client1.username;
    const newUsername = client2.username;
    const brandNewUsername = 'Dave';
    expect(chatroom.rename(username, newUsername)).toBeFalsy();
    expect(chatroom.rename(username, brandNewUsername)).toBeTruthy();
    expect(chatroom.rename(username, 'Emily')).toEqual({
      username: 'Emily'
    });
  });

});





//test 1: .client
//expect(client.username).toEqual(username);
//expect(getClient(username)).toEqual(username);
