const express = require("express");
const bodyParser = require("body-Parser");

//express app
const app =express();

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

//Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connecting to database
mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
}).then(() => {
    console.log("successfully connected to database\n");
}).catch(err => {
    console.log("could not connect to database.exiting now....!\n", err);
    process.exit();
});

//define route
app.get('/', (req, res) => {
    res.json({"message" : "welcome.....!"});
});

//require note routes
require('./app/routes/note.routes.js')(app);

//listen for requests
app.listen(3000, () => {
    console.log("server is listening to port 3000");
});