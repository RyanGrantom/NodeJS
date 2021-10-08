const person = require('./test5');

const friend1 = new person('Ryan','Grantom')
const friend2 = new person('Jane','Doe')
const friend3 = new person('John','Smith')

console.log(friend1.myName());
console.log(friend2.myName());
console.log(friend3.myName());

