var express = require('express');
var path = require('path');

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

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});
