function parseMessage(str){
  if(str[0] !== ('@')) {
    return null;
  } else {
    return {
      command: str.slice(0, str.indexOf(':'))
    };
  }
}

module.exports = {
  parseMessage
};
