const val1 = 'Hello World';
const val2 = 'Test Private 2';
const val3 = 'New Message';

function output(message){
    console.log(`This is your message ${message}. Private value ${val2}`);
    return message;
}

module.exports.output = output;
module.exports.val1 = val1;
exports.val3 = val3;