console.clear();
const myArr1 = ['one', 'two', 55, true, {one:'one', two : 'two'}];



let val = myArr1.toString();
val = JSON.stringify(myArr1);
val = JSON.parse(val); //when yo uparse it, you change the memory location so the val and myarr1 object are no longer connected.
val[0] = "UPDATED";

console.log(val);
console.log(myArr1);

const myArr2 = ['one','two','three','one','two','three','one','two','three'];
val = myArr2.join();

val = myArr2.concat(myArr1);

val = myArr2.includes('four');
val = myArr2.indexOf('two');
val = myArr2.lastIndexOf('two');
console.clear();

// myArr2.length = 0;
// console.log(myArr2);
// val = Array.isArray(val);

const myArr3 = myArr2.map(val=>{
    return val;
})
console.log(myArr3);
console.log(val)


const myArr4 = myArr2.map(val =>{
    val += ' Tested';
    return val;
})
console.log(myArr4)