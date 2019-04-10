function parseMessage(string) {
  if(string.charAt(0) !== '@') return null;

  //const pattern = /@(?<command>\w*):?(?<args>\w*)\s?(?<text>.*)?/
  //const match = pattern.exec(str);
  //if(!match || !match.groups) return null
  //return {
  //   command: match.groups.command,
  //   args: match.groups.args,
  //   text: match.groups.text
  // }



  let str = string.slice(1);
  str = `${str} `;
  const colonIndex = str.indexOf(':');
  const spaceIndex = str.indexOf(' ');
  let command = '';
  let arg = '';
  const text = str.slice(spaceIndex, str.length - 1);
  
  if(str.includes(':')) {
    command = str.slice(0, colonIndex);
    arg = str.slice(colonIndex + 1, spaceIndex);

  } else {
    command = str.slice(0, spaceIndex);
    arg = '';
  }

  console.log('command', command);
  console.log('arg', arg);
  console.log('text', text);

  const parsedMessageObject = {
    command: command,
    arg: arg,
    text: text
  };

  return parsedMessageObject;
}

module.exports = parseMessage;
