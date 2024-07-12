/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
correct = 0;

// 2. Store the rank of a player
rank = "None"

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
answer1 = prompt('Name the programming language that you are learning?')
if( answer1 == 'JAVA') {
    correct +=1;
}

answer2 = prompt('What is the programming language for web content creation?')
if( answer2 == 'HTML') {
    correct +=1;
}

answer3 = prompt('What lanauge do we use for styling web?')
if( answer3 == 'CSS') {
    correct +=1;
}

answer4 = prompt('Where do you study?')
if( answer4 == 'DOUGLAS') {
    correct +=1;
}

answer5 = prompt('Where is your place of study located?')
if( answer5 == 'NEW WEST') {
    correct +=1;
}

alert(correct)

if (correct == 5) {
    rank= "Gold" 
}

else if (correct >= 3) {
    rank= "Silver"
}

else if (correct >= 1) {
    rank= "Bronze"
}

else if (correct = 0) {
    rank= "NO CROWN FOR YOU!"
}

document.querySelector('main').innerHTML = "Your score is... " + `${correct}` + " </br> Your crown is " + `${rank}` 
alert("Your score is... " + `${correct}` + "</br> Your crown is " + `${rank}`)
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element
