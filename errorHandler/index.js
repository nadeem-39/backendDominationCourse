const express = require('express');

const app  = express();

app.get('/', (req, res, next)=>{
    try{
        res.send(hey);
    }catch(err){
        next(err);
    }
})

app.use((err, req, res, next)=>{
    res.status(500).send(err.message);
})

app.listen(8080);