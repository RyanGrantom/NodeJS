const fun4 = (a,b,c)=> {
    const val = a * b * c;
    return val
}   // IIFE Immediately invoked fucntion expression

console.log(fun4(2,3,4))
/*
(()=>{
    console.log('test');
})() //IIF with arrows
*/

let counter = 100;
function loop(val){
    console.log(val);
    if(val<1){
        return
    }
    const temp = val-1;
    loop(temp);
}

loop(counter);

function loop2(val){
    console.log(val);
    if(val>0){
        val=val-1;
        return loop2(val);
    }
    return 'end';
}

const looper = loop2(100)
console.log (looper)