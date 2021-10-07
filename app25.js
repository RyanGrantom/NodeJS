//JS single Thread
function test1(){//recursive function not good. was used for example
    return test1();
}

var test4 = function test5(i){
    console.log(i);
    if(i<5){
        test5(i+1);
    }
    

}

test4(0);


// console.log('one');

//test1();
// console.log('two');

//Event loop checks call stack - to see if any functions need to be ran.
// console.clear();
const one = ()=> console.log('one');//4 6
const two = ()=> console.log('two');//6 5
const test2 = ()=>{
    console.log('three'); //2
    one();//3
    two();//5
} 

// test2(); // 1
// console.clear();
const test3 = ()=>{
    console.log('three');//2
    setTimeout(one,0);//3 but starts timer
    two();//4
} 
// test3();//1

//event loop gives priority to call stack - only once the stack is clear then does it start the queue.

console.clear();

(()=>{
    console.log('run right away');
})();//iife

setTimeout(() => {
    console.log('i ran after 1 second')
}, 1000);