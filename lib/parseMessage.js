function parseMessage(string) {
  if(string.charAt(0) !== '@') return null;
  const colonIndex = string.indexOf(':');

  const command = string.slice(1, colonIndex);
  console.log('cmd', command);
  const arg = '';
  const text = '';
  return {
    command: command,
    arg: arg,
    text: text
  };

}

module.exports = parseMessage;
