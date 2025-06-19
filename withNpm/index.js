const http = require('http');

const server = http.createServer(function(req,res){
    if(req.url ==='/'){
        res.end("hi bro ");
    }else if(req.url ==='/profile'){
        res.end("jab koi profile hai hi nhi to kya bheju tujhe ");
    }else res.end("page not found");
});

server.listen(3000);