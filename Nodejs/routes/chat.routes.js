const express = require('express');
const app = express();
const chatRoute = express.Router();
let chatModel = require('../models/chat');

// Get all Book
chatRoute.route('/').get((req, res) => {

  chatModel.find({}, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        res.send({ result })
    }
})
  })

// Save Book

chatRoute.route('/save').post((req, res) => {
  var myData = new chatModel(req.body);
  console.log(req.body);
  console.log(req);
  myData.save().then(item => {
  res.send("Data saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
 });


module.exports = chatRoute;