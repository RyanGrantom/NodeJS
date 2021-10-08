console.log(process.env);

const rLine= require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

rLine.question(`what is your name?`, name =>{
    console.log(name);
    // cryonsole.log(process);
    console.log(`Welcome ${name}`);
    rLine.close();
})

process.on('exit',(val)=>{
    console.log(`Process Exiting ${val}`);
})
process.on('beforeExit',(val)=>{
    console.log(`Before Exit`);
    console.log(val)
})
console.log(`last Message`);