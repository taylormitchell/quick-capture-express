var express = require('express');
var path = require('path');
var createError = require('http-errors')

var apiRouter = require('./routes/api');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  return res.send(`
    <h1>ERROR: ${err.status}</h1>
    <p>${err.message}</p>
    <p>${err.stack}</p>
  `)
  
});

const PORT = 3001
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
});
