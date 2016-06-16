"use strict";
const express = require('express'),
      app = express(),
      router = require('./router'),
      portNumber = process.env.PORT || process.argv[2] || 8080;

app.use('/', router);

app.listen(portNumber, function () {
  console.log("Listening on port " + portNumber);
});
