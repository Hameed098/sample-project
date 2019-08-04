const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-oauth');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();

//set up view engine
app.set('view engine', 'ejs');

// set up cookie session
app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: [ keys.session.cookieKey ]
	})
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

//createing home route
app.get('/', (req, res) => {
	res.render('index', { user: req.user });
});

//serving static files
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });  .....................

//Bodyparser middleware
app.use(bodyParser.json());

//db config
mongoose.connect(keys.mongodb.dbURI, () => {
	console.log('connected to mongodb...');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
