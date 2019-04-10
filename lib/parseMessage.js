module.exports = function parseMessage(message) {
    if(message.search(/@/) === 0) {
        const cmdObject = {
            command: message.split(':')[0].split('@')[1],
            arg: message.split(':')[1].split(' ')[0],
            text: message.split(' ').slice(1).join(' ')
        };
        return cmdObject;
    }
    else {
        return null;
    }
};
