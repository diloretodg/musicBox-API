const mongoose = require("mongoose");
const http = require('http');
const app = require('./app.js');
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/musicboxdb");

// Start the API server
server.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}`);
});