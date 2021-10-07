let counter = 0;
async function hello(mes){
    console.log(mes);
    counter++;
    
    let pro1 = new Promise((res,rej)=>{
        setTimeout(res('works'),2000);
    });
    let result = await pro1;
    return `${mes} + ${counter} + ${result}`;   
}

function output(mes){
    counter++;
    console.log(`${mes} ${counter}`)
}

hello('Hello World').then((val)=>{
    console.log(val)
})

for(let i=0; i<5; i++){
    output(`Loop ${i}`);
}