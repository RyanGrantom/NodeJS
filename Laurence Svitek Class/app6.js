const fun1 = function(a,b,c){
    const val = a * b * c;
    return val;
} //expression... not sure what the difference is.

const a = 5;
const b = 6;
const c = 7;


(function(a,b,c) {
    const val = a * b * c;
    console.log(val)
})(a,b,c)   // IIFE Immediately invoked fucntion expression

const fun3 = (function(a,b,c) {
    const val = a * b * c;
    return val
})(a,b,c)   // IIFE Immediately invoked fucntion expression



const val1 = fun1(1,2,3);
// console.log(val1);

function fun2(a,b,c){
    const val = a * b * c;
    return val;
}

const val2 = fun2(9,2,5);
console.log(val1);
console.log(val2);
console.log(fun3);