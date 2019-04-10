function parseMessage(string) {
  if(string.charAt(0) !== '@') return null;
  const colonIndex = string.indexOf(':');
  const spaceIndex = string.indexOf(' ');

  let command = '';
  let arg = '';
  let text = '';
  if(string.includes(':' && ' ')) {
    command = string.slice(1, colonIndex);

    arg = string.slice(colonIndex + 1, spaceIndex);
    text = string.slice(spaceIndex + 1);
  } 
  else if(string.includes(':' && !' ')) {
    command = string.slice(1, colonIndex);
    arg = string.slice(colonIndex + 1);
    text = null;
  }
  else { 
    command = string.slice(1, spaceIndex); 
    arg = null;
    text = string.slice(spaceIndex + 1);

    console.log('I\'M IN ELSE');
  }
    
  const parsedMessageObject = {
    command: command,
    arg: arg,
    text: text
  };

  console.log(parsedMessageObject);
  return parsedMessageObject;
}

module.exports = parseMessage;
