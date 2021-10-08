console.log(global);

console.log('first');

setImmediate((val)=>{
    console.log(`immediate ${val}`)
},'Hello World');

console.log('last');

for(let i =0; i<10; i++){
    console.log(i)
}
let counter = 0;
function keepRunning(){
    counter++;
    if(counter>5){
        clearInterval(int1);
    }
    console.log(`running ${counter}`);
}

const int1 = setInterval(keepRunning, 1000);

const int3 = setTimeout(() => {
    console.log('3 Second Timeout');
    clearTimeout(int2);
},3000);


const int2 = setTimeout(() => {
    console.log('5 Second Timeout');
    
},5000);
