var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, passport, db) {

  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  app.get('/profile', isLoggedIn, function(req, res) {
    db.collection('tasks').find({ userId: req.user._id }).sort({ _id: -1 }).toArray(function(err, result) {
      if (err) return res.send(err);
      res.render('profile.ejs', {
        user: req.user,
        tasks: result,
        taskMessage: req.flash('taskMessage')
      });
    });
  });

  app.get('/logout', function(req, res) {
    req.logout(function() {
      console.log('User has logged out!');
    });
    res.redirect('/');
  });

  app.post('/tasks', isLoggedIn, function(req, res) {
    db.collection('tasks').insertOne({
      title: req.body.title,
      status: 'todo',
      userId: req.user._id
    }, function(err, result) {
      if (err) return res.send(err);
      console.log('saved to database');
      res.redirect('/profile');
    });
  });

  app.get('/tasks/:id/edit', isLoggedIn, function(req, res) {
    if (!ObjectID.isValid(req.params.id)) return res.redirect('/profile');

    db.collection('tasks').findOne({
      _id: new ObjectID(req.params.id),
      userId: req.user._id
    }, function(err, result) {
      if (err) return res.send(err);
      if (!result) return res.redirect('/profile');
      res.render('edit-task.ejs', { task: result, taskMessage: req.flash('taskMessage') });
    });
  });

  app.post('/tasks/:id/edit', isLoggedIn, function(req, res) {
    if (!ObjectID.isValid(req.params.id)) return res.redirect('/profile');

    db.collection('tasks').findOneAndUpdate({
      _id: new ObjectID(req.params.id),
      userId: req.user._id
    }, {
      $set: {
        title: req.body.title
      }
    }, {
      returnOriginal: false
    }, function(err, result) {
      if (err) return res.send(err);
      if (!result.value) return res.redirect('/profile');
      res.redirect('/profile');
    });
  });

  app.post('/tasks/:id/status', isLoggedIn, function(req, res) {
    if (!ObjectID.isValid(req.params.id)) return res.redirect('/profile');
    if (['todo', 'in-progress', 'done'].indexOf(req.body.status) === -1) return res.redirect('/profile');

    db.collection('tasks').findOneAndUpdate({
      _id: new ObjectID(req.params.id),
      userId: req.user._id
    }, {
      $set: {
        status: req.body.status
      }
    }, {
      returnOriginal: false
    }, function(err, result) {
      if (err) return res.send(err);
      if (!result.value) return res.redirect('/profile');
      res.redirect('/profile');
    });
  });

  app.post('/tasks/:id/delete', isLoggedIn, function(req, res) {
    if (!ObjectID.isValid(req.params.id)) return res.redirect('/profile');

    db.collection('tasks').findOneAndDelete({
      _id: new ObjectID(req.params.id),
      userId: req.user._id
    }, function(err, result) {
      if (err) return res.send(err);
      res.redirect('/profile');
    });
  });

  app.get('/login', function(req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  app.get('/signup', function(req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}
