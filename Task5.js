let secretNo = 6
let yourNo=prompt('Enter number between 1 and 10');
let guessNo=Number(yourNo);

if (isNaN(guessNo) || guessNo < 1 || guessNo > 10){
    alert('This is not a number or entered number is out of range');
}
else {
    if(guessNo===secretNo){
        alert('Bingo! Correct answer')
    }
    if(guessNo===secretNo+1){
        alert('Close enough to the correct answer');
    }
}
