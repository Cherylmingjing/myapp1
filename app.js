var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var index = require('./routes/index');
var data = require('./routes/data');

var app = express();

var mongoose = require('mongoose');

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var MONGODB_URL = process.env.MONGODB_URL ||'mongodb://cheryl_mingjing:woaigaimima123@ds127801.mlab.com:27801/cherylmingjing';
mongoose.connect(MONGODB_URL);
var db;

ongoClient.connect('mongodb://cheryl_mingjing:woaigaimima123@ds127801.mlab.com:27801/cherylmingjing', (err, database) => {
  if (err) return console.log(err)
  db = database
})

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://cherylmingjing:woaigaimima123@ds127801.mlab.com:27801/cherylmingjing')

var uri = "mongodb://cherylmingjing:woaigaimima123@ds127801.mlab.com:27801/cherylmingjing";
MongoClient.connect(uri, function(err, db) {
  db.close();
});

var Schema = mongoose.Schema;
var uN = String;

var userSchema = new Schema ({
  userID: String
})

var questionSchema = new Schema ({
  question: [{}],
  answers: [{}]
})

var testSchema = new Schema({
    username: String,
    testName: String,
    questions: [],
    answers: [],
    correct: []
});

var User = mongoose.model('User', userSchema);
var Test = mongoose.model('Test', testSchema);
var Question = mongoose.model('Question', questionSchema);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
app.set( 'view engine', 'html' );
app.engine('.html',require('pug').__express);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/data', data);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
