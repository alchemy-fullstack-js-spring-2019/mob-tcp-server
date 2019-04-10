const parseMessage = require('../lib/parseMessage');

describe('parseMessage reads string and parses for command object', () => {
    it('ignores string that do not start wit @', () => {
        const testString = 'any words';
        const commandObj = parseMessage(testString);
        expect(commandObj).toBeNull();
    });
    it('takes string and returns in specified object form', () => {
        const anotherString = '@cmd:param whatever I want';
        const expected = {
            command: 'cmd',
            arg: 'param',
            text: 'whatever I want'
        };
        expect(parseMessage(anotherString)).toEqual(expected);
    });
}); 
