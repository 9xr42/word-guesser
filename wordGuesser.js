let fiveLetterWords=[
    'APPLE','HELLO','HOUSE','WHOLE','WOMAN','SHARE','ABUSE','ADULT','AGENT','ANGER','APPLE',
    'AWARD','BASIS','BEACH','BIRTH','BLOCK','BOARD','BRAIN','BREAD','BREAK','BROWN','BUYER','CAUSE','CHAIN','CHAIR',
    'CHEST','CHIEF','CHILD','CHINA','CLAIM','CLASS','CLOCK','COACH','COAST','COURT','COVER','CREAM','CRIME','CROSS',
    'CROWD','CROWN','CYCLE','DANCE','DEATH','DEPTH','DOUBT','DRAFT','DRAMA','DREAM','DRESS','DRINK','DRIVE','EARTH','ENEMY','ENTRY',
    'ERROR','EVENT','FAITH','FAULT','FIELD','FIGHT','FINAL','FLOOR','FOCUS','FORCE','FRAME','FRANK','FRONT','FRUIT','GLASS','GRANT','GRASS','GREEN',
    'GROUP','GUIDE','HEART','HENRY','HOUSE','HORSE','HOUSE','HOTEL','IMAGE','INDEX','INPUT','ISSUE','JAPAN','JUDGE','KNIFE','LAYER','LEVEL','LIMIT',
    'LUNCH','MAJOR','MARCH','MATCH','METAL','MODEL','MONEY','MONTH','MOTOR','MOUTH','MUSIC','NIGHT','NOISE','NORTH','NOVEL','NURSE','OFFER','ORDER','OTHER',
    'OWNER','PANEL','PAPER','PARTY','PEACE','PHASE','PHONE','PIECE','PILOT','PITCH','PLACE','PLANE','PLANT','PLATE','POINT','POUND','POWER','PRESS','PRICE','PRIDE','PRIZE',
    'PROOF','QUEEN','QUIET','RADIO','RANGE','RATIO','REPLY','RIGHT','RIVER','ROUTE','ROUND','RUGBY','SCALE','SCENE','SCOPE','SCORE','SENSE','SHAPE','SHARE','SHEEP','SHEET','SHIFT','SHIRT','SHOCK','SIGHT',
    'SKILL','SLEEP','SMILE','SMOKE','SOUND','SOUTH','SPACE','SPEED','SPITE','SPORT','SQUAD','STAFF','STAGE','START','STATE','STEAM','STEEL','STONE','STORE','STUDY','STUFF','STYLE','SUGAR','TABLE','TASTE',
];
let currentWord = '';
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('guess-button').addEventListener('click', () => {
        guess();
    });
    document.getElementById('new-game').addEventListener('click', ()=>{
        startGame();
    });

    startGame();
});

/**
 * Start/reset Game
 * 
 * Get a random word and save it to currentWord
 * Blank out guess text area
 * blank out guesses div
 */
function startGame() {
    
    currentWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
    console.log(currentWord)
    document.getElementById('guess').value='';
    document.getElementById('guesses').innerHTML='';
}

/**
 * Handle Guess
 * 
 * Read the guess
 * compare the guess to currentWord
 * Append to guesses div
 * Check if win
 */
function guess() {
    var guess = document.getElementById('guess').value.toUpperCase();
    document.getElementById('guess').value='';
    if(guess==currentWord){
        document.getElementById('guesses').innerHTML += "<span style=color:green>" + guess + "</span></br>"
        alert("Congratulations! You guessed the word!")
    }
    else{
        for(let i = 0; i<guess.length; i++){
            
            if(guess.charAt(i)==currentWord.charAt(i)){
                document.getElementById('guesses').innerHTML+="<span style=color:green>" + guess.charAt(i) + "</span>"
            }
            else if(currentWord.includes(guess.charAt(i))){
                document.getElementById('guesses').innerHTML+="<span style=color:orange>" + guess.charAt(i) + "</span>"
            }
            else{
                document.getElementById('guesses').innerHTML+="<span style=color:red>" + guess.charAt(i) + "</span>"
            }
        }
        document.getElementById('guesses').innerHTML+="</br>"
    }

}