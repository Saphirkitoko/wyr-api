const express = require('express'); // Import the Express framework

// Import routes from the index.js file
const indexRouter = require('./routes/index');

// Create Express application
const app = express();

// Make the routes defined in index.js available to the application
app.use('/', indexRouter);

// Start the server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port);
});
