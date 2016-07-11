var express = require('express');
var api = require('./api');
var app = express();

app.get('/api/whoami/', api.whoami);

app.get('/*', api.redirect);

var port = process.env.PORT || 3000;
app.listen(port, function(err) {
  if (err) {
    console.log('An error occurred starting the app');
    console.lot(err);
    process.exit(1);
  }
  console.log('Server started on port: ', port);
});
