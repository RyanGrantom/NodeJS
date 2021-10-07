function adder(a,b){
    console.log('adder')
    return a+b;
}
function doubler(a,b){
    console.log('doubler')
    return adder(a,b)*2;
}

function output(a,b){
    console.log(a,b);
    const dub = doubler(a,b);
    console.log(dub);
}

output(1,5);