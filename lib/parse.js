function parseMessage(aString) {
  if(aString[0] !== '@') {
    return null; 
  }

  const string = aString.slice(1);

  const spaceIndex = string.indexOf(' ');

  const colonIndex = string.indexOf(':');

  const command = string.slice(0, (colonIndex));

  const arg = string.slice((colonIndex + 1), spaceIndex);

  const text = string.slice((spaceIndex + 1), string.length);

  const messageResponse = {
    command: command,
    arg: arg,
    text: text
  };
  return messageResponse;
}
module.exports = { parseMessage };
