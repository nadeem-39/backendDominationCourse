
const express = require('express');

const app = express();

let arr = [2,4,5,6];

app.get('/', (req, res)=>{
    res.send("hiii there")
});

app.post('/data/:num', (req, res)=>{
    console.log(typeof(req.params.num));
    arr.push(parseInt(req.params.num));
    res.send(arr);
})

app.listen(3000);