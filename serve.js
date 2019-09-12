/* global process require __dirname */
const prpl = require('prpl-server'),
	express = require('express'),
	morgan = require('morgan'),
	path = require('path'),
	app = express(),
	config = require('./build/polymer.json'),
	compression = require('compression'),
	httpsRedirect = require('express-https-redirect');


console.info(process.env.PORT || 5002);
const images = (req, res) => {
    console.log(req.path);
    var options = {
        root: path.join(__dirname, `images/${req.path.split('/')[2]}`),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    var fileName = req.params.name;
    res.sendFile(fileName, options, err => err ? next(err) : console.log('Sent:', fileName));
};
app.use(compression());
app.set('view cache', true);
app.use('/', httpsRedirect());
app.get('/images/invaders/:name', images);
app.get('/images/books/:name', images);
app.get('/images/maps/:name', images);
app.get('/*', prpl.makeHandler('./build/', config));
app.listen(process.env.PORT || 5002);
