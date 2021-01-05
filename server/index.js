const express = require('express');
const app = express();
let time = new Date();

const routes = require('./routes/index.js').route;

const p = 8080;

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV:'development';
console.log(`[${time}] ENV: ${process.env.NODE_ENV}`);

const serverhttp = require('http')
.createServer(app)
.listen(8000, (err) => {
	if (err) throw err;
	console.log(`[${time}] Server is active on port: ${p}`);
});

// INITIATE ROUTES

routes(app);


