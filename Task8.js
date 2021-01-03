let numberSign=Number(prompt('Enter a number'));

if (isNaN(numberSign)){
    alert('You have not entered a valid number')
} 
else if(numberSign > 0){
document.write('<h2>You have enter a POSITIVE number</h2>');
}
else if(numberSign < 0){
    document.write('<h2>You have enter a NEGATIVE number</h2>');
}
else if(numberSign === 0){
    document.write('<h2>You have enter a ZERO number</h2>');
}
