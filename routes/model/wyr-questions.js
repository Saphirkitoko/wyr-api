// Array containing Would You Rather questions and their corresponding answers
const questions = [
    {
        'question': 'Live in a house shaped like a triangle or a house shaped like a circle?',
        'answer1': 'Triangle house',
        'answer2': 'Circle house'
    },
    {
        'question': 'Have a cat-sized elephant or an elephant-sized cat?',
        'answer1': 'Cat-sized elephant',
        'answer2': 'Elephant-sized cat'
    },
    {
        'question': 'Be able to fly or be able to breathe underwater?',
        'answer1': 'Fly',
        'answer2': 'Breathe underwater'
    },
    {
        'question': 'Play any musical instrument or speak any language?',
        'answer1': 'Play any musical instrument',
        'answer2': 'Speak any language'
    },
    {
        'question': 'Be a famous movie star or a famous scientist?',
        'answer1': 'Famous movie star',
        'answer2': 'Famous scientist'
    },
];

// Function to get a random Would You Rather question
function randomWyrQuestion() {
    // Generate a random index within the range of the questions array
    const randomIndex = Math.floor(Math.random() * questions.length);
    // Retrieve a random question object from the questions array
    const randomQuestion = questions[randomIndex];
    // Return the randomly selected question
    return randomQuestion;
}

// Export the randomWyrQuestion function to be used in other modules
module.exports = randomWyrQuestion;
