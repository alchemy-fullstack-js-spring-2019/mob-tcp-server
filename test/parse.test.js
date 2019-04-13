const parseMessage = require('../lib/parse');

describe('parse function', () => {
  it('ignores strings that do not start with @ and returns null if found', () => {
    const invalidChatIn = 'I am a badly written chat message';
    const parsedMessage = parseMessage(invalidChatIn);
    expect(parsedMessage).toEqual(null);
  });
  it('returns an object with a "command" value', () => {
    const validChatIn = '@cmd:param some text';
    const parsedMessage = parseMessage(validChatIn);
    expect(parsedMessage).toContain({ command: 'cmd' });
  });
  it('contains an "arg" value', () => {
    const validChatIn = '@cmd:param some text';
    const parsedMessage = parseMessage(validChatIn);
    expect(parsedMessage).toContain({ command: 'param' });
  });
  it('contains a "text" value', () => {
    const validChatIn = '@cmd:param some text';
    const parsedMessage = parseMessage(validChatIn);
    expect(parsedMessage).toContain({ command: 'some text' });
  });
});

