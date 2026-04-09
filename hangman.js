const POSSIBLE_WORDS = ["amity", "candor", "dauntless", "erudite", "abnegation", "padawan"]; 

var word = ""; 
var guesses = ""; 
var guessCount = 6; 
var gameOver = false; 

let newGame = function(){ 
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length); 
    word = POSSIBLE_WORDS[randomIndex]; 
    guesses = ""; 
    guessCount = 6; 
    gameOver = false; 
    updatePage(); 
} 

let updatePage = function() { 

    let clueString = ""; 
    let won = true; 

    for(let i = 0; i < word.length; i++){ 
        let currentLetter = word.charAt(i); 

        if(guesses.indexOf(currentLetter) >= 0) { 
            clueString += currentLetter + " "; 
        } else { 
            clueString += "_ "; 
            won = false; 
        } 
    } 

    let clue = document.getElementById("clue"); 
    clue.textContent = clueString; 

    let guessArea = document.getElementById("guesses"); 

    // Win
    if(won && word !== "") { 
        guessArea.textContent = "You WIN! Word was: " + word; 
        gameOver = true; 
    } 
    // Lose
    else if(guessCount <= 0) { 
        guessArea.textContent = "You LOST! Word was: " + word; 
        gameOver = true; 
    } 
    else { 
        guessArea.textContent = "Guesses: " + guesses + " | Lives: " + guessCount; 
    } 

    let image = document.getElementById("hangmanpic"); 
    image.src = `images/hangman${guessCount}.gif`; 
} 

let guessLetter = function() { 

    // Don't allow before game starts
    if(word === "") { 
        return; 
    } 

    // Don't allow after game ends
    if(gameOver) { 
        return; 
    } 

    let input = document.getElementById("guess"); 
    let letter = input.value.toLowerCase(); 

    // Clear input always
    input.value = ""; 

    // Prevent empty input
    if(letter === "") { 
        return; 
    } 

    // Prevent duplicate guesses
    if(guesses.indexOf(letter) >= 0) { 
        return; 
    } 

    // Wrong guess
    if(word.indexOf(letter) < 0) { 
        guessCount--; 
    } 

    guesses += letter; 

    updatePage(); 
}