const newDate = new Date();
console.log(newDate);

const oldDate = new Date(2020, 10, 17, 10, 40);
console.log(oldDate);

const zeroDay = new Date(-10000000000);
console.log(zeroDay)

const isoDate = new Date("1980-01-15");
console.log(isoDate)

zeroDay.setFullYear(2020);

console.log(zeroDay.getTime());
console.log(zeroDay.getFullYear());
console.log(zeroDay.getDay());