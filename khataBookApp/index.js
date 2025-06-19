const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// home page route of app
app.get('/', (req, res)=>{
    fs.readFile('./files/index.txt', 'utf-8', (err,result)=>{
        if(err) return res.send("something went wrong");
        let data = result.split('\n');
        res.render('HomePage.ejs',{data : data});
        
    })
    
})

// crete route 
app.get('/create', (req, res)=>{
    
    res.render('create.ejs');

})

//writing route

function createFile(fileName, nameOfUser, hisaab_kitaab, res){
    fs.writeFile(`./files/${fileName}`, hisaab_kitaab, (err)=>{
        if(err) return res.send("error");
    })
}

app.post('/create/data', (req, res)=>{
    let fileName = req.body.date + '.txt';
    let nameOfUser = req.body.name;
    let hisaab_kitaab = req.body.hisaab_kitaab;
    // appending name of that file in index file for home 
    fs.appendFile('./files/index.txt', fileName+'\n', (err)=>{
        if(err) return req.send("something went wrong");
    })
    createFile(fileName, nameOfUser, hisaab_kitaab, res);
    res.redirect('/');

})

// read route 

app.get('/getData/:fileName', (req, res)=>{
    let file = req.params.fileName;
    fs.readFile(`./files/${file}`, 'utf-8' , (err, data)=>{
        if(err) res.send("somthing wrong");
        let dataInArr = data.split('\r\n');
        console.log(dataInArr);
        res.render('viewdata.ejs', {file, dataInArr});
    })
})


// edit route 
app.get('/editData/:fileName', (req, res)=>{
    let file = req.params.fileName;
    fs.readFile(`./files/${file}`, 'utf-8' , (err, data)=>{
        if(err) res.send("somthing wrong");
        res.render('editData.ejs', {file, data});
    })
})

// update route

app.post('/editData/confirm/:fileName',(req,res)=>{
    let file = req.params.fileName;
    let data = req.body.value;
    fs.writeFile(`./files/${file}`,data, (err)=>{
        if(err) res.send("somthing went wrong")
        let dataInArr = data.split('\r\n');
        res.render('viewdata.ejs', {file, dataInArr});
    })
})

// delete route 
app.get('/deleteFile/:fileName', (req, res)=>{
    let fileToRemove = req.params.fileName;
    fs.unlink(`./files/${fileToRemove}`, (err)=>{
        if(err) res.send("error again");
    })
    fs.readFile('./files/index.txt', 'utf-8', (err,data)=>{
        if(err) res.send("error plese request again");
        let updatedContent = data.replace(fileToRemove, "");
        fs.writeFile('./files/index.txt', updatedContent, (err)=>{
            if(err) res.send("error plese do again");
        })
        res.redirect('/');
    })
})

app.listen(8080);
