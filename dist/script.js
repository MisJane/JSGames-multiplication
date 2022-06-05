const getRandomNumber = () => { // Random number generation function
    return Math.round(Math.random() * 10);
}

const startRound = () => {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();

    const answer = prompt(`Find the multiplication of numbers ${randomNumber1} и ${randomNumber2}.`); // Get a response from the player

    const correctAnswer = randomNumber1 * randomNumber2; // Get the correct answer

    if (+answer === correctAnswer) { // By comparing the correct answer with the player's answer
        alert("The answer is correct!");
        return true;
    } else {
        alert(`The answer is incorrect! The correct answer will be: "${correctAnswer}".`);
        return false;
    }
}

const playGame = () => {
    for (let i = 0; i < 10; i++) { // Cycle from 0 to 9
        const isCorrectAnswer = startRound(); // Calling the round function and getting the correct answer
        if (!isCorrectAnswer) { // If the answer is wrong, we end the game
            alert("The game is over!");
            return;
        }
    }
    alert("Congratulations, you are the winner!"); // If you answered all ten correctly, congratulations
}
