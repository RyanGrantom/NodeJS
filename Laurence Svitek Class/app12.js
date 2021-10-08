const myObj1 = {
    first : "Ryan",
    last : "Grantom",
    age : 40,
    a1 : 'test',
    a2 : 'test2',
    a3 : 'test3',
    'test 1' : 'wow'
};

const myobj2 = {
	"first": "Ryan",
	"last": "Grantom",
	"age": 40,
	"a1": "test",
	"a2": "test2",
	"a3": "test3",
	"test 1": "wow"
}

console.log(myObj1);

console.log(myObj1.first + ' ' + myObj1.last)// dot notation

console.log(myObj1['first'] + ' ' + myObj1['last'])// bracket notation
console.clear();
for( let x =1; x<4; x++){
    console.log('a'+x)
    console.log(myObj1['a'+x])
}

console.log(myObj1['test 1']);

console.log(myobj2);

console.clear();

const myobj4 = {
    val : 100,
    val1 : true,
    val2 : 'string',
    val3 : {
        first: 'Ryan',
        last: 'Grantom',
    },
    val4 : {
        first: 'Ryan',
        last: 'Grantom',
    },
    fullName : function(val5){
        console.log(this)
        console.log(val5)
        return this.val4.first + ' ' + this.val4.last
    }
}

// console.log(myobj4.val3.first + ' ' + myobj4.val3.last)

console.log(myobj4.fullName('test'));
