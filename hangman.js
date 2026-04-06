const POSSIBLE_WORDS = ["amity", "candor", "dauntless", 
    "erudite", "abnegation", "padawan"];


    let newGae = function() {

        let randomIndex = parseInt((Math.random() * POSSIBLE_WORDS.length));
        let word = POSSIBLE_WORDS[randomIndex];
        console.log("Word Chosen: ", word);


        let clueString = "";
        for(let i = 0; i < word.length; i++) 
            {
                clueString += "_";
            }

            let clue = document.getElementById("clue");
            clue.textContent = clueString;
        }