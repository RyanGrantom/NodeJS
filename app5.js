function firstjsfunction() {
    console.log('Hello');
    console.log('World');
}

function secondjsfunction(message,name,value) {
    console.log(message);
    console.log(name);
    console.log(value);
    return value
}

function thirdjsfunction(a,b,c){
    const val1 = a * b / c;
    console.log('===='+val1);
    return val1

}

firstjsfunction();
secondjsfunction('whats', 'happening', 'dog');

const val1 = secondjsfunction('whats','happening','My Dude')
console.log(val1);

const val2 = thirdjsfunction(85,12,3);
console.log(val2);