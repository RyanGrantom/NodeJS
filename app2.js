console.log(__dirname);
console.log(__filename);
console.log('Ryan');
console.log('Grantom');
// console.log(process.argv);
const first = process.argv[2];
const second = process.argv[3];

let message = `Hi welcome ${first} ${second}`;
console.log(message);