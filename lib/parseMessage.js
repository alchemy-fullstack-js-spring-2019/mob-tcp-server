function parseMessage(string) {
  if(string[0] !== '@') return null;
  const toColon = string.indexOf(':');
  const toSpace = string.indexOf(' ');
  if(!string.includes(':')) {
    return {
      command: string.slice(1, (toSpace)),
      arg: '',
      text: string.slice(toSpace + 1)
    };
  } else if(!string.includes(' ')) {
    return {
      command: string.slice(1, (toColon)),
      arg: string.slice((toColon + 1)),
      text: ''
    };
  } else {
    return {
      command: string.slice(1, (toColon)),
      arg: string.slice((toColon + 1), toSpace),
      text: string.slice((toSpace + 1))
    };
  }

}

module.exports = parseMessage;


