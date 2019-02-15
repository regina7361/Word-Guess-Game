//Array of fortnite characters
const fortniteSkins = ['liteshow', 'fate', 'flytrap', 'magnus', 'omen',
'raven', 'scout', 'jumpshot', 'bandolier', 'burnout', 'ventura',  
'diecast', 'scoundrel', 'carbide', 'zoey', 'valor', 'omega', 'drift', 
'rook', 'fable', 'dusk', 'nightshade', 'dire', 'aim', 'zenith', 'lynx', 
'powder', 'trog'];


//Choose word randomly
let randomName = Math.floor(Math.random() * fortniteSkins.length);
let chosenWord = fortniteSkins[randomName];
console.log(chosenWord);

//Introduce global variables
let rightLetter = [];
let wrongLetter = [];
let underScore = [];
var winCount = 0;
var guessesLeft = 9;
var loseCount = 0;

//Dom manipulation
let fillUnderScore = document.getElementsByClassName('underscore');
let fillRightGuess = document.getElementsByClassName('rightGuess');
let fillWrongGuess = document.getElementsByClassName('wrongGuess');

//function reset()
//{
    //chosenWord = fortniteSkins[Math.floor(Math.random() * wordBank.length)];
    //document.getElementById('fnskinsimage').innerHTML = "<img src='../assets/images/"+ choosenWord + ".jpeg'/>";
    
    //rightLetter = [];
    //wrongLetter = [];
    //guessesLeft = 9;
    //winCount = 0;
    //loseCount = 0;
    //underScore =[];

    //test=false;
    //generateUnderscore();
//}

//Create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push('_');
    }
    fillUnderScore[0].innerText = underScore.join(' ');
    document.getElementById('pic').innerHTML = 
    "<img src='assets/images/"+ chosenWord + ".jpg'/>";
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
            alert('You Win!');
            document.location.reload();   
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
		document.location.reload();
    }
    
});


