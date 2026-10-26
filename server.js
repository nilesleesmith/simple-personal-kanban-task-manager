// server.js

var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

var db;

mongoose.connect(configDB.url, {
  dbName: configDB.dbName,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function(err) {
  if (err) return console.log(err);

  db = mongoose.connection.db;
  require('./app/routes.js')(app, passport, db);
  console.log("Connected to `" + configDB.dbName + "`!");

  app.listen(port, function() {
    console.log('The magic happens on port ' + port);
  });
});

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(session({
  secret: 'rcbootcamp2021b',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

