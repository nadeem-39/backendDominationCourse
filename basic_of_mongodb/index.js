const express = require('express');
const app = express();

const mongooseconfig = require('./config/mongoose.js');
const userModel = require('./modles/user.js');
const userInfo = require('./modles/userInformation.js');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/create', async (req, res)=>{
    let {name , password, email} = req.body;
    let userData = await userModel.create({
        name,
        email,
        password
    })

    res.send(userData);
})

app.get('/read', async(req, res)=>{
    let data = await userModel.find();
    res.send(data);
})

// find one

app.get('/read/:name', async (req, res)=>{
    let data = await  userModel.findOne({name: req.params.name});
    res.send(data);
})

app.patch('/update', async (req, res)=>{
    let{name ,updateName} = req.body;
    let data = await userModel.findOneAndUpdate({name}, {name:updateName}, {new: true});
    res.send(data);
})


app.delete('/delete', async (req, res)=>{
    let name = req.body.name;
    let deletedData = await userModel.findOneAndDelete({name:name});
    res.send(deletedData);
})



console.log("listening port 3000");

app.listen(3000);

