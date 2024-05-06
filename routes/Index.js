const express = require('express');
const router = express.Router();
const randomWyrQuestion = require('../model/wyr_questions'); // Importing the randomWyrQuestion function from the model

// Route for getting a random Would You Rather (WYR) question
router.get('/wyr', function(req, res, next) {
    // Call the randomWyrQuestion function to get a random WYR question
    const wyrQuestion = randomWyrQuestion();
    // Respond with the random WYR question in JSON format
    res.json(wyrQuestion);
});

// Export the router to be used in other modules
module.exports = router;
