
let counter = 0;
const arr = [1,2,3,4,5];
console.clear();

function aFun(myArr,callback){
    myArr.forEach((el)=>{
        setTimeout(callback,1000,`1000 ${el}`);
        setTimeout(callback,1500,`1500 ${el}`);
        setTimeout(callback,2000,`2000 ${el}`);
    }); 
    myArr.forEach((el)=>{
        setTimeout(callback,0,`0 ${el} - `);
        }); 
}

aFun(arr,(val)=>{
    counter++;
    console.log(`${counter} ${val} async`);
})

console.log(counter + ' test');

arr.forEach((el)=>{
    console.log(el);
    console.log('sync');
});

console.clear();
console.log('one');
setTimeout(() => {
   console.log('eleven-hundred'); 
}, 1100);
console.log('two');
setTimeout(() => {
    console.log('five'); 
 }, 5000);
console.log('three');
setTimeout(() => {
    console.log('zero'); 
 }, 0);
console.log('Pre-Five')