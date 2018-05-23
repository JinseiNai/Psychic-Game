// Array of letters to guess.
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// set counters
let winCount = 0;
let lossesCount = 0;
let guessesLeft = 8;
let guessesMade = [];

// Randomly chooses a letter from the array of alphabet.
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter + ' is random');

// Function run whenever user presses a key.
document.onkeyup = function (event) {
    // Assigns the key the user pressed.
    let userGuess = event.key;
    console.log(userGuess);

    // call guessChecker function.
    guessChecker(userGuess);

    // Checks userGuess against letter
    function guessChecker(userGuess) {
        if (guessesLeft > 0) {
            if (userGuess.toLowerCase() == randomLetter) {
                winCount++;
                guessesMade += userGuess;
                randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                console.log(randomLetter + ' is random');
                guessesLeft = 8;
                guessesMade = [];
            }
            else {
                guessesLeft--;
                guessesMade += userGuess;
                if (guessesLeft === 0) {
                    lossesCount++;
                    guessesLeft = 8;
                    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                    console.log(randomLetter + ' is random');
                    guessesMade = [];
                }
            }
        }
    }

    // Updates status
    let status =
        "<p>Wins: " + winCount + "</p>" +
        "<p>Losses: " + lossesCount + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + "<span class='spacing'>" + guessesMade + "</span>" + "</p>";

    document.querySelector(".status").innerHTML = status;
};