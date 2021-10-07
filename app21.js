const pro1 = new Promise((resolve,reject)=>{
    const temp = 3;
    setTimeout(()=> {
        reject('TIMED OUT');
    },1000);
    setTimeout(()=> {
        resolve('Hello');
    },500);
    /*
    if(temp > 5){
        resolve('success');
    }else{
        reject('reject');
    }
      */ 
})

pro1.then(
    (val)=>{
        console.log(`TRUE: ${val}`);
    },
    (err)=>{
        console.log(`ERROR: ${err}`);
    }
);