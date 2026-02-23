var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const { db } = require('./config/database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const demoRouter = require('./routes/demo');
const customLogger = require('./middleware/customLogger');
const adminAuth = require('./middleware/adminAuth');
const adminRouter = require('./routes/admin');
const todoRouter = require('./routes/todos');
const movieRouter = require('./routes/movie');
const reviewRouter = require('./routes/review');
const auth = require('./middleware/auth');
var app = express();

mongoose.connect(db).then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(customLogger.logger);
app.use(adminAuth.auth);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/api/users', usersRouter);
app.use('/demo', demoRouter);
app.use('/api/todos',/*auth.verifyToken,*/todoRouter);
app.use('/api/movies',/*auth.verifyToken,*/movieRouter);
app.use('/api/reviews',auth.verifyToken,reviewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
