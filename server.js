const path = require('path');
const express = require('express');
const webpack = require('webpack');
var config = require('./webpack.config');
var fetch = require('node-fetch')
var services = require('./src/server/services/services')

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: false,
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/teamlist/:seasontype', (req, res) => {
	services.getTeamList(req.params.seasontype)
		.then(data => {
			res.send(data)
		})
});

app.get('/gamegeneral/:year/:month/:day', (req, res) => {
	services.getGameGeneral(req.params.year, req.params.month, req.params.day)
		.then(data => {
			res.send(data)
		})
});

app.get('/gamedetail/:year/:month/:day/:gameid', (req, res) => {
	services.getGameDetail(req.params.year, req.params.month, req.params.day, req.params.gameid)
		.then(data => {
			res.send(data)
		})
});

app.listen(3000, 'localhost', (err) => {
	if (err) {
		console.log(err);
		return;
	}
	
	console.log('Listening at http://localhost:3000');
});

