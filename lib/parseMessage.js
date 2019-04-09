function parseMessage(str){
  if(str[0] !== ('@')) {
    return null;
  } else {
    return {
      command: str.slice(0, str.indexOf(':')),
      arg: str.slice(str.indexOf(':') + 1, str.indexOf(' ')),
      text: str.slice(str.indexOf(' ') + 1, str.length)
    };
  }
}

module.exports = {
  parseMessage
};
