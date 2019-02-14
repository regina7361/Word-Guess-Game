//Array of fortnite characters
const fortniteSkins = ['commando', 'devastator', 'dominator', 
'liteshow', 'fate', 'flytrap', 'magnus', 'oblivion', 'omen',
'raptor', 'raven', 'nitelite', 'renegade', 'scout', 'jumpshot', 
'abstrakt', 'bandolier', 'burnout', 'tomatohead', 'ventura', 
'venturion', 'diecast', 'scoundrel', 'moonwalker', 'carbide', 
'battlehawk', 'teknique', 'zoey', 'valor', 'omega', 'drift', 
'huntress', 'redline', 'sledgehammer', 'rook', 'ragnarok', 'fable',
'dusk', 'nightshade', 'calamity', 'dire', 'aim', 'zenith', 'lynx', 
'powder', 'trog', 'onesie'];

//Choose word randomly
let randomName = Math.floor(Math.random() * fortniteSkins.length);
let chosenWord = fortniteSkins[randomName];
console.log(chosenWord);

//Introduce main variables
let rightLetter = [];
let wrongLetter = [];
let underScore = [];

//Counters
var winCount = 0;
var guessesLeft = 9;
var loseCount = 0;

//Dom manipulation
let fillUnderScore = document.getElementsByClassName('underscore');
let fillRightGuess = document.getElementsByClassName('rightGuess');
let fillWrongGuess = document.getElementsByClassName('wrongGuess');

//Create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push('_');
    }
    fillUnderScore[0].innerText = underScore.join(' ');
}

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

        //if guess matches chosenword add wins and alert
        if(underScore.join('') == chosenWord){
            winCount++; //Counts Wins
            document.getElementById('winCounter').innerHTML = winCount;
            alert('You Win!'); //add a div that doesn't have anything (maybe an img tag)    
        }
    }
    
        //if letters are wrong add to wrong letter array
        else {
            wrongLetter.push(keyword);
            guessesLeft--;
            document.getElementById('numGuesses').innerHTML = guessesLeft;
            fillWrongGuess[0].innerHTML = wrongLetter;
        }
        
        if (guessesLeft === 0){
		//Counts losses
		loseCount++;
		//Changes HTML
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');
		//reset();
    }
    
});




//fixes for tomorrow:
//fill in all underscores that match a single letter (first forloop will find all the indexes and push into an array and the second forloop will add the letter to each index)
//After the user wins/loses the game should automatically choose another word and make the user play it.
//add image when user wins (replace image with prompt)
//ignore letters case - ex. if I enter 'r' it doesn't recognize it but if I enter R it works
