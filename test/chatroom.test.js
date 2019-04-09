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



});





//test 1: .client
//expect(client.username).toEqual(username);
//expect(getClient(username)).toEqual(username);
