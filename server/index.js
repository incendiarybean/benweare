const express = require('express');
const headers = require('./imports/headers.js');
const app = express();
let time = new Date();

const routes = require('./routes/index.js').route;

const p = 8080;

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV:'development';
console.log(`[${time}] ENV: ${process.env.NODE_ENV}`);
if(process.env.NODE_ENV !== "development") app.use(headers);

const serverhttp = require('http')
.createServer(app)
.listen(process.env.PORT || process.env.HTTPS || 8080, (err) => {
	if (err) throw err;
	console.log(`[${time}] Server is active on port: ${process.env.PORT || process.env.HTTPS || 8080}`);
});

// INITIATE ROUTES

routes(app);