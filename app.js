const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Create express app
const app = express();

//Database
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@cluster0.ryoyw.mongodb.net/Phonebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("Connected to MongoDB phonebook ...");
});

//Middleware
app.use(bodyParser.json());

//Routes
app.get('/',(req, res) => {
    res.send("Welcome to my Phonebook app ");
});

const ContactsRoute = require('./routes/Contacts');

app.use('/contacts', ContactsRoute);


//Starting server
app.listen(3000, console.log("Listening to port 3000"));
