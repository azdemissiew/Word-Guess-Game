//create an array of words for search engin
    var words = ["google", "bing", "yahoo", "ask.com", "aol.com", "baidu", "wolframalpha", "duckduckgo"];

//pick a random word from the words of array
    var letter= words[Math.floor(Math.random() * words.length)];
    let correctword=[];
    let wrongword=[];
    let answerArray =[];

  console.log(letter);
  
  //dom manipulation
    let docunderscore = document.getElementsByClassName('underscores');
    let doccorrectguess=document.getElementsByClassName('correctguess');
    let docwrongGuess=document.getElementsByClassName('wrongGuess');
 //*********main function*** */

// to see how many letters are in the words
 function underscore () {
for( var i =0; i < letter.length; i++){
    answerArray.push('_');
    
  }
  return answerArray;
}
  

// to see the how many guessed letter left


// key event 
document.addEventListener('keypress', (event) => {
    
    let keyword = String.fromCharCode(event.keycode);

    //user gues is right 
   if (letter.indexOf(keyword)> -1){
    // add to right words array
       correctword.push(keyword);
        
    //replace answerarray with right letter
        answerArray[letter.indexOf(keyword)]=keyword;
        docunderscore[0].innrtHTML=underscore.join('');
        doccorrectguess[0].innrtHTML=correctword;
     if(answerArray.join('') == letter) {
        alert('you win');
         }
       
   }
   else {
       wrongword.push(keyword);
      
   }
});

































 /* ('#target').keydown(function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) { // if a letter pressed
       // play that funky music.  
    }

  

  // ***********the main game loop******

  // while there are letters left to be guessed
  while( remaningLetters > 0){
      alert(answerArray.join(""));

    // get a guess from the player 
    var guess = prompt("guess a letter, or click cancel to stop playing");
  } */
   
  // if the guess is blank
  




  