const { parseMessage } = require('../lib/parse');

describe('parse function', () => {
  it('ignores strings that do not start with @ and returns null if found', () => {
    const invalidChatIn = 'I am a badly formatted chat message';
    const parsedMessage1 = parseMessage(invalidChatIn);
    expect(parsedMessage1).toEqual(null);
  });
  it('parses the command, arg, and text correctly and returns an object', () => {
    const validDMIn = '@dm:testarg testtext';
    const validParse = {
      command: 'dm',
      arg: 'testarg',
      text: 'testtext'
    };
    const parsedMessage2 = parseMessage(validDMIn);
    expect(parsedMessage2).toEqual(validParse);
  });
});

