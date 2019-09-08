/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/* eslint-env node */

module.exports = {
	staticFileGlobs: [
		'index.html',
		'locations.json',
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
			handler: 'fastest',
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
