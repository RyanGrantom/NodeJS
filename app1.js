console.log(process);
for(let x=0; x<10000; x++){
    console.log(x);
    if(x==3000){
        process.exit();
    }
}
