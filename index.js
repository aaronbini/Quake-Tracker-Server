'use strict';

const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve( __dirname, '/public' );
const indexHtml = path.resolve( __dirname, '/index.html' );

app.use(express.static(publicPath));
app.get('/', (req,res) => res.sendFile(indexHtml));

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log('server running at: ', server.address());
});