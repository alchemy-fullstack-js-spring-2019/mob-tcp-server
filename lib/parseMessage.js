function parseMessage(str){
  if(str[0] !== ('@')) {
    return false;
  } else {
    return true;
  }

  // return {
  //   command: //cmd
  //   arg: //param
  //   text: //text
  // }
}

module.exports = {
  parseMessage
};
