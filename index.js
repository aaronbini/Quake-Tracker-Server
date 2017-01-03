'use strict';

const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve( __dirname, '../public' );

app.use(express.static(publicPath));

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log('server running at: ', server.address());
});