const test1 = function(){
    console.log('test1');
}
const person = {
    first: 'Ryan',
    last: 'Grantom'
}
// test1();
// console.log(module.filename);

exports.test1 = test1;
exports.person = person;