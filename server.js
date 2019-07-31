const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const app = express();

//set up view engine
app.set('view engine', 'ejs');

//createing home route
app.get('/', (req, res) => {
    res.render('index');
});





// //serving static files
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });



//Bodyparser middleware
app.use(bodyParser.json());

//db config
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb...');
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));