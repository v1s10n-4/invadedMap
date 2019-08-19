/* global process require __dirname */
const prpl = require('prpl-server'),
    express = require('express'),
    morgan = require('morgan'),
    app = express(),
    config = require('./build/polymer.json'),
    compression = require('compression'),
    httpsRedirect = require('express-https-redirect');


console.info(process.env || 5002);
if (process.env.ENV === 'dev' || process.env.ENV === 'staging') {
    app.use(morgan('dev'));
    app.use(compression());
    app.use(express.static(`${__dirname}/`));
} else {
    app.use(compression());
    app.set('view cache', true);
    app.use('/', httpsRedirect());
    app.get('/*', prpl.makeHandler('./build/', config));
}
app.listen(process.env.PORT || 5002);
