const express = require('express');
const bodyParser = require('body-parser');
var dateRoute = require('./routes/date');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/', dateRoute)
app.listen(3000, () => console.log('App started on port 3000'));
