let ready = false;

const checker = new Promise((resolve,reject)=>{
    if(ready){
        const markReady = 'This is the Result';
        resolve(markReady);
    }else{
        const markNotReady = 'Stil working on it';
        reject(markNotReady);
    }

})

console.log(checker);
ready = false;
console.log(checker);

const check1 = () => {
    checker.then(val=>{
        console.log(val);
    })
    .catch(err =>{
        console.log(`error ${err}`);
    })
}
check1();