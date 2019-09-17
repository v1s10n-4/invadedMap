/* eslint-env node */

module.exports = {
	staticFileGlobs: [
		'index.html',
		'locations.json',
		'cities.json',
		'images/**/*',
		'!images/invaders/*',
		'images/*.svg',
		'manifest.json',
		'bower_components/webcomponentsjs/*',
		'bower_components/google-map/*',
		'bower_components/google-map-markerclusterer/*',
	],
	navigateFallback: 'index.html',
	runtimeCaching: [
		{
			urlPattern: /\/src\/*.html/g,
			handler: 'fastest',
			options: {
				cache: {
					name: 'src/*-cache'
				}
			}
		},
		{
			urlPattern: /\/bower_components\/webcomponentsjs\/.*.js/,
			handler: 'fastest',
			options: {
				cache: {
					name: 'webcomponentsjs-polyfills-cache'
				}
			}
		},
		{
			urlPattern: "https://space-invaders.com/api/highscore/?uid=false",
			handler: 'cacheFirst',
			options: {
				cache: {
					name: 'SIAPI-highscores'
				}
			}
		},
		{
			urlPattern: /https:\/\/maps.gstatic.com\/mapfiles\/closedhand_8_8.cur/g,
			handler: 'fastest',
			options: {
				cache: {
					name: 'google-map-cursor'
				}
			}
		},
		{
			urlPattern: /https:\/\/maps.googleapis.com\/maps\/vt?pb=*/g,
			handler: 'cacheFirst',
			options: {
				cache: {
					name: 'google-map-cache'
				}
			}
		},
		{
			urlPattern: 'https://cdn.polyfill.io/v2/polyfill.js?features=fetch',
			handler: 'fastest',
			options: {
				cache: {
					name: 'fetch-polyfill'
				}
			}
		}
	],
};
