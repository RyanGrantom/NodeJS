function tester(val){
    try{
        if(val == undefined) throw "no value";
        if(isNaN(val)) throw "not a number";
        val = Number(val);
    }
    catch(err){
        console.log(`There was an error: ${err}`)
    }
    finally{
        console.log(`Done ${val}`);
    }
}

tester(100)
tester('hello')
tester()