const fs = require("fs");
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const server = app.listen(port);
server.timeout = 1000 * 60 * 10; // 10 minutes
console.log("Book Store Server App Listening on Port 4000");