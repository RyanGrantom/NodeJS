console.clear();
// console.log(global);
let a = 'hello';
let counter = 0;
function timer(val){
    message(`timer ran ${val} ${a}`);
}

function message(val){
    counter++;
    console.log(`${counter}. - ${val}`)
}

for(let i = 5; i>0; i--){
    setTimeout(()=>{message(`i=${i}`)},i*1000,`${counter} Loop : ${i*1000}`);
}


console.log('new val')

a = 'World';