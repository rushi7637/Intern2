var express = require('express');
var router = express.Router();

const userModel = require("./users");
const passport = require('passport');
const localStrategy = require('passport-local');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/register', function (req, res) {
  var userdata = new userModel({ 
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  userModel.register(userdata, req.body.password)
    .then(function (registereduser) { 
      passport.authenticate("local") (req, res, function () {
        res.redirect('/login');
      })
    })
}); 


module.exports = router;
