const express = require('express')
const app= express();
const ejs = require('ejs');
const path = require('path');


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"view"));




app.get('/', (req, res)=>{
    res.render('home.ejs');
})

app.get('/check', (req,res)=>{
    let {answer} = req.query;
    if(answer.indexOf("title") != -1){
       res.render('nextQuestion');
    }else{
        res.send("wrong answer");
    }
    
    // console.log(answer);
    // res.redirect('/');
})

app.get('/background', (req,res)=>{
    let{keyword} = req.query;
    if(keyword.indexOf("kaif")!=-1){
        res.send("correct answer");
    }else{
        res.send("worng answer");
    }
    
})


app.listen(8000 , ()=>{
    console.log("server start");
})