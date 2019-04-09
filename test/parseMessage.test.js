const parseMessage = require('../lib/parseMessage');

describe('parseMesssage', () => {
  it('ignores strings that do not start with @', () => {
    const sampleString = 'sample string';
    expect(parseMessage(sampleString)).toEqual(null);
  });
  it('takes a string and returns an object', () => {
    const sampleString = '@cmd:param some text';
    expect(parseMessage(sampleString)).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });

  });
  it('works if no arg', () => {
    const sampleString = '@cmd some text';
    expect(parseMessage(sampleString)).toEqual({
      command: 'cmd',
      arg: '',
      text: 'some text'
    });

  });
  it('works if no text', () => {
    const sampleString = '@cmd:param';
    expect(parseMessage(sampleString)).toEqual({
      command: 'cmd',
      arg: 'param',
      text: ''
    });

  });
  
});
