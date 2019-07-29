var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    test            = require('assert');


app.listen(7000, function() {
    console.log("Node server running on http://localhost:7000/");
});

app.get('/', function(req, res) {
    res.send('hello world');
  });

  app.get('/tester', function(req, res) {
    res.send('Hi Austro');
  });

var router = express.Router();
router.get('/about', function(req, res) {
    res.send('Hi Jony');
});


app.use('/', router);