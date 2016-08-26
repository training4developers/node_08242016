'use strict';

const http = require('http');
const express = require('express');

const widgets = [
	{ id: 1, name: 'Widget 1', color: 'blue' },
	{ id: 2, name: 'Widget 2', color: 'hot pink' },
	{ id: 3, name: 'Widget 3', color: 'purple' }
];

const app = express();

app.get('/api/widgets', function(req, res) {

	try {
		res.json(widgets);
	} catch(err) {
		console.log('caught the error');
		res.status(500).send(err.message);
	}

});

app.get('/api/widgets/:widgetId', function(req, res) {

	try {
		
		res.json(widgets.find(w => w.id === parseInt(req.params.widgetId, 10)));

		// res.json(widgets.find(function(w) {
		// 	return w.id === parseInt(req.params.widgetId, 10);
		// }));

	} catch(err) {
		console.log('caught the error');
		res.status(500).send(err.message);
	}
	
});


const server = http.createServer(app);

server.listen(3000, function() {
	console.log('listening on port 3000');
});