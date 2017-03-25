'use strict'

const assert = require('assert');

const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');

const indexRoutes = require('./lib/routes/index.routes');
const assetRoutes = require('./lib/routes/asset.routes');
const booksRoutes = require('./lib/routes/books.routes');

const server = new hapi.Server();
server.connection({
  host: process.env.IP || 'localhost',
  port: process.env.PORT || 3000
});

server.register([inert, vision], (err) => {
  assert(!err, err);

  server.route(indexRoutes);
  server.route(assetRoutes);
  server.route(booksRoutes);

  server.start((err) => {
    assert(!err, err);
    console.log(`Server running at: ${server.info.uri}`);
  })
});

module.exports = server;