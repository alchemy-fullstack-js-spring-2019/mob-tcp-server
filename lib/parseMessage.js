function parseMessage(str){
  if(str[0] !== ('@')) {
    return null; }

  if(!str.includes(':')){
    return {
      command: str.slice(1, str.indexOf(':')),
      arg: '',
      text: str.slice(str.indexOf(' ') + 1, str.length + 1)
    };

  } else if(!str.includes(' ')) {
    return {
      command: str.slice(1, str.indexOf(':')),
      arg: str.slice(str.indexOf(':') + 1, str.length),
      text: ''
    };

  } else {
    return {
      command: str.slice(1, str.indexOf(':')),
      arg: str.slice(str.indexOf(':') + 1, str.indexOf(' ')),
      text: str.slice(str.indexOf(' ') + 1, str.length + 1)
    };
  }
}

module.exports = {
  parseMessage
};
