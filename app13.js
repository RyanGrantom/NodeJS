console.clear();

const myArr1 = ['test',10,true,{one: 'one',two:'two'}];
const myObj1= {one: 'one',two:'two'};
console.log(typeof myObj1);
console.log(typeof myArr1)
console.log(myArr1);
console.log(myArr1.length)
// console.log(myArr1)

const myArr2 = myArr1;
myArr2[0] = 'Tested Okay';

for( let x = 0 ; x<5 ; x++){
    // myArr2[myArr2.length] = 'Counter ' + x;
    const temp = 'Counter ' + x;
    myArr2.push(temp);
}

for( let x = 0 ; x<3 ; x++){
    const temp = myArr2.pop();
    console.log('Removed ' + temp);

}

for( let x = 0 ; x<2 ; x++){
    const temp = myArr2.shift();
    console.log('Removed' + temp);
}

for( let x = 5 ; x>0 ; x--){
    const temp = 'Add ' + x;
    myArr2.unshift(temp);
}


let tempArr = [];

for( let x = 0 ; x<5 ; x++){
    const temp = 'Value ' + x;
    tempArr.push(temp)
}

console.log(tempArr);
myArr2.splice(3,0,tempArr);
console.log(myArr2);

// delete myArr2[4];
// myArr2[100]='100';
// console.log(myArr2.length);
// console.log(myArr2[0]);
// console.log(myArr1);


// console.log(myArr1[3]['one']);
