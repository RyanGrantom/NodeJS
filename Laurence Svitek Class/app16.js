console.clear();
const a = `hello`;
const b = `world`;

function add(x,y){
    return x + y;
}

const val = `
    ${a} ${b} ${5+5} ${add(100,50)}
single quotes ' 
double quotes "
happy days :)
sad days :(
New \n Line


`;

console.log(val)
