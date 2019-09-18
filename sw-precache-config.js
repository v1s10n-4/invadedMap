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
			urlPattern: /src\/.*.html/g,
			handler: 'fastest',
			options: {
				cache: {
					name: 'src/*-cache'
				}
			}
		},
		{
			urlPattern: /images\/invaders\/.*.(jpg|png)/g,
			handler: 'fastest',
			options: {
				cache: {
					name: '1nv4d3r5',
					maxEntries: 420
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
			urlPattern: /fonts\/VG5000\-Regular_web.*/g,
			handler: 'fastest',
			options: {
				cache: {
					name: 'fonts'
				}
			}
		},
		{
			urlPattern: /https:\/\/space-invaders\.com\/api\/highscore\/\?uid=false/g,
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
					name: 'google-maps-cursor'
				}
			}
		},
		{
			urlPattern: /^(http(s?):\/\/)?maps\.googleapis(\.|\/).*\/maps\/.*$/g,
			handler: 'cacheFirst',
			options: {
				cache: {
					name: 'google-maps-cache',
					maxEntries: 404042
				}
			}
		},
		{
			urlPattern: /https:\/\/cdn.polyfill.io\/v2\/polyfill.js\?features=fetch/g,
			handler: 'fastest',
			options: {
				cache: {
					name: 'fetch-polyfill'
				}
			}
		}
	],
};
