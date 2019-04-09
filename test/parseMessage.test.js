const { parseMessage } = require('../lib/parseMessage.js');

describe('Parse message', () => {
  it('ignores strings that do not start with @', () => {
    const mockString = '@cmd:param some text';
    const badString = 'cmd:param some text';
    expect(parseMessage(mockString)).toBeTruthy();
    expect(parseMessage(badString)).toBeFalsy();
  });
});
