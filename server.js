fs = require('fs');

express = require('express');
bodyParser = require('body-parser');
methodOverride = require('method-override');
consolidate = require('consolidate');
logger = require('morgan');

server = express();

server.set('views', __dirname + 'views'); // set the view directory
server.engine('html', consolidate['dust']); // use dust template when extension is ".html"
server.set('view engine', 'html'); // use ".html" as the default extension

server.use(morgan('dev'); // start logging
server.disable('view cache'); // disable caching of views since this repo is for development purposes only
server.enable('showStackError'); // show stack errors since this repo is for development purposes only

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(methodOverride());

server.enable('jsonp callback');

server.use(express.static('frontend');

fs.readdirSync('routes').forEach(function(route) {
  server.use(require(__dirname + 'routes/' + route)
});

server.listen(3000);

module.exports = server;
