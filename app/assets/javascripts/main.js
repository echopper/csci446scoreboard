var guessesLeft = 10;
var answer = getRandomInt(1,100);
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);

$('document').ready(function() {
    $('#btnGuess').click(function() {
        makeAGuess();
    });
    $('#guess').keydown(function(event) {
        if(event.keyCode == 13) {
            makeAGuess();
        }
    });


    $('#submitscore').click(function() {
        crownAChampion();
    });
    $('#name').keydown(function(event) {
        if(event.keyCode == 13) {
            crownAChampion();
        }
    });

    $('#prompt a').click(function() {
        playAgain();
    });

    $('input').keypress(function(event) {
        if(event.keyCode == 13) {
            return false;
        }
    });
});

// Initialize the game
$(function() {
    updateScore(guessesLeft);
    populateHighScores(highScores);
});

/*
 * Evaluates the guess made (or lack thereof)
 * Gives the user hints about if they guessed higher or lower than the number
 * Tells user if they have made an invalid guess
 * And ends the game if the player runs out of turns
 */
function makeAGuess() {
    var thisGuess = $('#guess').val();
    if(thisGuess == "") {
        alert("You must make a guess!");
    } else if(thisGuess != answer) {
        if(thisGuess > answer)
            alert("Oooh. You're high!");
        else
            alert("How low can you be?");
        if(guessesLeft > 0)
            guessesLeft--;
        updateScore(guessesLeft);
    } else {
        $('#guesser').slideUp();
        $('#winner').slideDown();
    }
    if(guessesLeft == 0) {
        $('#guesser').slideUp();
        showPrompt("YOU HAVE LOST");
    }
}

/*
 * Takes a name and score and publishes it in lights
 */
function crownAChampion() {
    addScore(guessesLeft, $('#name').val());
    $('#winner').slideUp();
    showPrompt("Play again?");
}

function showPrompt(prompt) {
    $('h2#display').text(prompt);
    $('#prompt').slideDown();
}

function populateHighScores(scores) {
    for (var i = 0; i < scores.length; ++i) {
        $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
    }
}

function showHighScores() {
    $('div#highScores').text("");
    populateHighScores(highScores);
}

function updateScore(score) {
    $('h2#score span#guessesLeft').text(score);
}

function addScore(score, name) {
    highScores.push([parseInt(score), name]);
    highScores.sort(compareNumbers);
    highScores.reverse();
    showHighScores();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playAgain() {
    answer = getRandomInt(1,100);
    guessesLeft = 10;
    updateScore(guessesLeft);
    $('#guess').val("");
    $('#prompt').slideUp();
    $('#guesser').slideDown();
}

function compareNumbers(a, b) {
    return a[0] - b[0];
}
