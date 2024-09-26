
// import express from "express";
const express = require("express");
const app = express();
const port = 3000;


const path = require('path')
var cookieSession = require('cookie-session');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/upload',  express.static(path.join(__dirname, 'upload_data')))


app.use(cookieSession({ secret: 'manny is cool' }));

app.get("/upload", (req: any, res: any) => {
    req.session.count = (req.session.count || 0) + 1
    res.send('viewed ' + req.session.count + ' times\n')
    // res.send(`<h1>no static Hello World!</h1><p>Express is a web application framework for Node.js</p>`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});