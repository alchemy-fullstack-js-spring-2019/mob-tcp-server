const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom tests', () => {
  let testChatRoom = null;
  beforeEach(() => {
    testChatRoom = new ChatRoom();

  });
  it('takes a socket, assigns user name, and stores by user name', () => {
    const client = {
      something: 'something'
    };
    const result = testChatRoom.add(client);
    expect(client.username).toEqual(expect.any(String));
    expect(client.username).toEqual(result.username);
    const returnedObj = testChatRoom.getClient(result.username);
    expect(returnedObj).toEqual(client);
  });

  it('chatroom instance can rename a user', () => {
    const client = {
      something: 'something'
    };
    testChatRoom.add(client);
    const oldUsername = client.username;
    const result = testChatRoom.rename(oldUsername, 'happybananas');
    expect(result).toBeTruthy();
    const notClient = testChatRoom.getClient(oldUsername);
    expect(notClient).toBeFalsy();
    expect(testChatRoom.getClient('happybananas')).toEqual(client);
    expect(client.username).toBe('happybananas');
  });

  it('can not rename to existing user name', () => {
    const clientOne = {
      something: 'something'
    };
    
    const clientTwo = {
      something: 'something'
    };

    const resultOne = testChatRoom.add(clientOne);
    const resultTwo = testChatRoom.add(clientTwo);
    expect(testChatRoom.rename(clientOne.username, clientTwo.username)).toBeFalsy();
    expect(testChatRoom.getClient(clientOne.username)).toEqual(clientOne);
    expect(testChatRoom.getClient(clientTwo.username)).toEqual(clientTwo);
  });

  it('calling all on the chatroom returns an array of all clients', () => {
    const clientOne = {};
    const clientTwo = {};
    const clientThree = {};

    testChatRoom.add(clientOne);
    testChatRoom.add(clientTwo);
    testChatRoom.add(clientThree);
    
    expect(testChatRoom.all()).toEqual([clientOne, clientTwo, clientThree]);
  });
});
