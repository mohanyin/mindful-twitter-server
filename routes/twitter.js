var express = require('express');
var passport = require('passport');

var router = express.Router();

router.get('/login/twitter',
  passport.authenticate('twitter'));

router.get('/oauth/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout',
  function(req, res){
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

module.exports = router;
