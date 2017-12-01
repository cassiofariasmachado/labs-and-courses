var express = require('express'),
	consign = require('consign'),
	bodyParser = require('body-parser'),
	expressValidator = require('express-validator'),
	expressSession = require('express-session');

var app = express();

/* Configuração das variáveis 'view engine' e 'views' do Express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Middlewares */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(expressValidator());
app.use(expressSession({
	secret: 'Jogo de mmorpg do GoT',
	resave: false,
	saveUninitialized: false
}));

/* Consign: autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/repositories')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;