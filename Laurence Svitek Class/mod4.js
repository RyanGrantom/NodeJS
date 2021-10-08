const http = require('http');

// console.log(http);

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    if(req.url == '/'){
        res.write('Main landing page.');
    }
    else if(req.url == '/test'){
        res.write('This is the Test Page.');
    }
    else{
        res.write('Error Page not found.');
    }
    res.end();

}).listen(8080);

console.log('Server Running...')