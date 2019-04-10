function parseMessage(string) {
  if(string.charAt(0) !== '@') return null;
  const colonIndex = string.indexOf(':');
    const spaceIndex = string.indexOf(' ');

  const commandEnd = /([':' || ' '])/;
  let command = '';
  if(string.includes(':')) {
    // const indexOfColon = string.indexOf(':');
    command = string.slice(1, colonIndex);
  } else { 
      command = string.slice(1, spaceIndex); 
    }
    
  }
  const command = //from the at symbol to the character before either a colon or a space;
  const arg = ''//if there is a colon, the characters from immediately after the colon to the space or to the end of the line;
  const text = ''//if there's a space, text after the space to end of line;
  return {
    command: command,
    arg: arg,
    text: text
  };

}

module.exports = parseMessage;
