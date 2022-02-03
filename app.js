const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
fs = require('fs');
//app.use('/assets', express.static('assets')); //Calls stylesheet

app.get('/', function (req, res) {

    console.log('Request was made: ' + req.url);
    
    res.render('test');
});


app.listen(8082, '0.0.0.0', function(){

    console.log("Listening to Port 8082")
    console.log("Running...")
});