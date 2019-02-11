//Array of fortnite characters
const fortniteSkins = ['Commando', 'Devastator', 'Dominator', 
'Liteshow', 'Fate', 'Flytrap', 'Magnus', 'Oblivion', 'Omen',
'Raptor', 'Raven'];

//Choose word randomly
let randomName = Math.floor(Math.random() * fortniteSkins.length);
let chosenWord = fortniteSkins[randomName];
console.log(chosenWord);

//Introduce main variables
let rightLetter = [];
let wrongLetter = [];
let underScore = [];

//Dom manipulation
let fillUnderScore = document.getElementsByClassName('underscore');
let fillRightGuess = document.getElementsByClassName('rightGuess');
let fillWrongGuess = document.getElementsByClassName('wrongGuess');

//Create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore());

//Get users guessed letter
document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);
    console.log(chosenWord.indexOf(keyword));


//If guessed right add to the right letter array and replace underscore
    if(chosenWord.indexOf(keyword) > -1){
        rightLetter.push(keyword);
        underScore[chosenWord.indexOf(keyword)] = keyword;
        fillUnderScore[0].innerHTML = underScore.join(' ');
        fillRightGuess[0].innerHTML = rightLetter;

        //check to see if random word matches guess
        if(underScore.join('') == chosenWord){
            alert('You Win!');
        }
    }
        //if letters are wrong add to wrong letter array
        else {
            wrongLetter.push(keyword);
            fillWrongGuess[0].innerHTML = wrongLetter;
        }
});




//fixes for tomorrow:
//display underscore upon clicking enter
//fill in all underscores that match a single letter
//add wins ticker
//Number of Guesses Remaining: (# of guesses remaining for the user).
//After the user wins/loses the game should automatically choose another word and make the user play it.
//add image when user wins (replace image with prompt)
//ignore letters case - ex. if I enter 'r' it doesn't recognize it but if I enter R it works
