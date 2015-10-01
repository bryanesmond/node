var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: '/Users/Esmond/Downloads/.stormpath/apiKey.properties',
  application: 'https://api.stormpath.com/v1/applications/3vA1OvjfE2hwvA7sZIH9fB',
  secretKey: 'hSPkD7I2WyHd8a8ojjwL6+supQ5GyG18oCkvN3BHsLM',
  expandCustomData: true,
  enableForgotPassword: true
});

app.use(stormpathMiddleware);

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.listen(3000);
