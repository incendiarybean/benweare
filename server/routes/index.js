const express = require('express');
const cors = require('cors');
const path = require('path');
const ObjectId = require('mongodb').ObjectID;

const db_module = require('../modules/db-module');
const ext_functions = require('../modules/ext-functions');

const bodyParser = require('body-parser');

let time = new Date();

// USE JSON BODY PARSING //
const route = (app) => {
    app.use(
        bodyParser.urlencoded({
        extended: true
        })
    )
    app.use(cors())
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../../build')))


    // INITIALISE BASIC INTERACTION POINTS //
    app.route('/')
        .get((req, res) => {
            return res.sendFile(path.join(__dirname, '../../build/index.html'))
        })
        .post((req,res) => {
            return res.json({ code:400, message:`${req.method} is not defined on ${req.path}`});
        });

    // DEFAULT ROUTE IF NOT FOUND //

    app.route('*')
        .get((req,res) => {
            return res.sendFile(path.join(__dirname, '../../build/index.html'))
        })
        .post((req,res) => {
            return res.json({ code:400, message:`${req.method} is not defined on ${req.path}`});
        });

}

module.exports = { route };