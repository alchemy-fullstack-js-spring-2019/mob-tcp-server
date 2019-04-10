const parseMessage = require('../lib/parseMessage');

describe('parse message', () => {
  it('ignore string not starting with @', () => {
    const message = 'Hi';

    expect(parseMessage(message)).toEqual(null);
  });
  it('returns object with command, argument, and text properties from string', () => {
    const message = '@dm:username hi everyone';
    const expected = parseMessage(message);
    expect(expected.command).toEqual('dm');
    expect(expected.arg).toEqual('username');
    expect(expected.text).toEqual('hi everyone');
  });
  // it('returns object with command and argument properties from string', () => {
  //   const message = '@nick:username';
  //   const expected = parseMessage(message);
  //   expect(expected.command).toEqual('nick');
  //   expect(expected.arg).toEqual('username');
  //   expect(expected.text).toEqual(null);
  // });
  // it('returns object with command and text properties from string', () => {
  //   const message = '@all hello';
  //   const expected = parseMessage(message);
  //   expect(expected.command).toEqual('all');
  //   expect(expected.arg).toEqual(null);
  //   expect(expected.text).toEqual('hello');
  // });

});
