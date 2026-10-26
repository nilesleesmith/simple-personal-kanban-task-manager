// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const configDB = require('./config/database.js');

let db;

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

