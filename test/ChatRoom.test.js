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

});
