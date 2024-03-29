const express = require('express');
const router = require('express').Router();

const app = express();
app.set('view engine', 'ejs');

const authCheck = (req, res, next) => {
	if (!req.user) {
		//if user is not logged in
		res.redirect('/');
	} else {
		//if logged in
		next();
	}
};
router.get('/', authCheck, (req, res) => {
	res.render('profile', { user: req.user });
});

module.exports = router;
