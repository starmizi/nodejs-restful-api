// UserController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
var User = require('./User');

// Creates a new user
router.post('/', function(req, res){
 User.create({
  name: req.body.name,
  email: req.body.email,
  password: req.body.password
  }, function (err, user){
   if (err) return res.status(500).send(err);
   res.status(200).send(user);
  });
});

// Returns all the users in the database
router.get('/', function (req,res){
 User.find({}, function (err, users){
  if (err) return res.status(500).send("There was a  problem finding the users.");
  res.status(200).send(users);
  });
});

// Get a single user from the database
router.get('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send("No user found");
    res.status(200).send(user);
  });
});

// Delete a user from the database
router.delete('/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).send(err);
    res.status(200).send("User "+ user.name +" was deleted.");
  });
});

// Updates a single user in the database
router.put('/:id', function (req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
    if (err) return res.status(500).send(err);
    res.status(200).send(user);
  });
});

module.exports = router;
