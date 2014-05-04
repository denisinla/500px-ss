// DEPENDENCIES
// ============
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 3000),
    server = module.exports = express();

// SERVER CONFIGURATION
// ====================
server.configure(function () {

    server.use(express["static"](__dirname + "/../public"));

    server.use(express.errorHandler({

        dumpExceptions:true,

        showStack:true

    }));

    server.use(server.router);
});

// SERVER
// ======

// Start Node.js Server
http.createServer(server).listen(port);

console.log('Node server loaded! Happy Hacking!');