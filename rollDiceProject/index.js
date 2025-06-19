const express = require('express');

const app = express();

app.set('view engine', 'ejs');


let count =0;
app.get('/dice' , (req, res)=>{
    count++;
    let num = Math.floor(Math.random() *6 +1);
    res.render('front.ejs', {num:num, count: count});
    // res.send("hii");
})

app.listen(8080);