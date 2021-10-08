const events = require('events');
const eEmitter = new events.EventEmitter();
let counter = 1;

const getParty = function(){
    counter++;
    console.log('Time to party');
    const ran = Math.ceil(Math.random()*3);
    console.log(`party starts in ${ran}`);
    tester(ran);
    
}

eEmitter.on('music',getParty);

// eEmitter.emit('music');

function tester(val){
    if(counter<5){
    setTimeout((e) => {
        eEmitter.emit('music');
    }, val*1000);
}
}

eEmitter.on('event',(a,b)=>{
    console.log(a,b,this);
})

eEmitter.emit('event','a','b');

let m = 0;
eEmitter.on('event4',()=>{
    console.log(++m);
})

eEmitter.emit('event4');

eEmitter.on('event1',(a,b)=>{
    setImmediate(()=>{
        console.log(`1 Async ${a} ${b}`)
    })
})

eEmitter.on('event2',(a,b)=>{
    console.log(`1 Async ${a} ${b}`)
})


eEmitter.once('event3',()=>{
    console.log('once run');
})

for(let x=0; x<4; x++){
    eEmitter.emit('event1',x,'b1');
    eEmitter.emit('event2',x,'b2');
    eEmitter.emit('event3');
}


