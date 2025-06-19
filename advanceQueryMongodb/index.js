const express  = require('express');
const app = express();
const userModel = require('./models/user.js');

const dummyData = [
    {
        username: "john_doe",
        name: "John Doe",
        password: "password123",
        age: "29",
        isMarried: false,
        email: "john.doe@example.com"
    },
    {
        username: "jane_smith",
        name: "Jane Smith",
        password: "securepassword",
        age: "34",
        isMarried: true,
        email: "jane.smith@example.com"
    },
    {
        username: "alex_king",
        name: "Alex King",
        password: "kingalex123",
        age: "41",
        isMarried: true,
        email: "alex.king@example.com"
    },
    {
        username: "sarah_johnson",
        name: "Sarah Johnson",
        password: "sarahpass",
        age: "27",
        isMarried: false,
        email: "sarah.johnson@example.com"
    },
    {
        username: "mike_brown",
        name: "Mike Brown",
        password: "mike12345",
        age: "38",
        isMarried: true,
        email: "mike.brown@example.com"
    },
    {
        username: "emily_white",
        name: "Emily White",
        password: "whiteemily",
        age: "22",
        isMarried: false,
        email: "emily.white@example.com"
    },
    {
        username: "jason_black",
        name: "Jason Black",
        password: "blackjason",
        age: "45",
        isMarried: true,
        email: "jason.black@example.com"
    },
    {
        username: "linda_green",
        name: "Linda Green",
        password: "greenlinda",
        age: "32",
        isMarried: false,
        email: "linda.green@example.com"
    },
    {
        username: "robert_wilson",
        name: "Robert Wilson",
        password: "wilsonrob",
        age: "37",
        isMarried: true,
        email: "robert.wilson@example.com"
    },
    {
        username: "anna_thomas",
        name: "Anna Thomas",
        password: "annathomas",
        age: "28",
        isMarried: false,
        email: "anna.thomas@example.com"
    },
    {
        username: "david_martin",
        name: "David Martin",
        password: "martindavid",
        age: "40",
        isMarried: true,
        email: "david.martin@example.com"
    },
    {
        username: "maria_clark",
        name: "Maria Clark",
        password: "clarkmaria",
        age: "25",
        isMarried: false,
        email: "maria.clark@example.com"
    },
    {
        username: "daniel_lee",
        name: "Daniel Lee",
        password: "leedaniel",
        age: "36",
        isMarried: true,
        email: "daniel.lee@example.com"
    },
    {
        username: "karen_lopez",
        name: "Karen Lopez",
        password: "lopezkaren",
        age: "42",
        isMarried: true,
        email: "karen.lopez@example.com"
    },
    {
        username: "peter_evans",
        name: "Peter Evans",
        password: "evanspeter",
        age: "31",
        isMarried: false,
        email: "peter.evans@example.com"
    }
];


app.get('/',(req, res)=>{
    res.send("hiii")
})

app.get('/createMany', async(req, res)=>{
    await userModel.insertMany(dummyData);
    res.send("done");
})

app.get('/viewData', async(req, res)=>{
    const data = await userModel.find({name: {$regex: /^a.*as$/i}});
    res.send(data);
})

app.listen(8080);