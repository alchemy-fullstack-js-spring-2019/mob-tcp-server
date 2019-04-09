function parseMessage(string) {
  if(string[0] !== '@') return null;
  const commandEnd = string.indexOf(':');
  const argEnd = string.indexOf(' ');
  return {
    command: string.slice(1, (commandEnd)),
    arg: string.slice((commandEnd + 1), argEnd),
    text: string.slice((argEnd + 1))
  };

}

module.exports = parseMessage;


