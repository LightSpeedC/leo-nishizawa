void function () {
	'use strict';

	const http = require('http');
	const url = require('url');
	let counter = 0;

	http.createServer((req, res) => {
		res.end('hello leo nishizawa ' + (++counter));
	}).listen(process.env.PORT || 3000);

/*
	(process.env.APP_URLS || '')
		.split(';')
		.filter(x => x)
		.forEach(x => {
			const opts = url.parse(x);
			opts.method = 'GET';

			http.request(opts, res => 0).end(); 
			setInterval(() => {
				http.request(opts, res => 0).end(); 
			}, 15 * 60 * 1000)
		});
*/

} ();
