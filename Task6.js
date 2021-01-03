let evenOdd=Number(prompt('Enter a number'));

if (isNaN(evenOdd)){
    alert('You have not entered a valid number. Try again ....');
}
else {
    if(evenOdd%2===0){
        document.write('<h1>You entered <em>EVEN</em> number</h1>');
    }
    else{
        document.write('<h1>You entered <em>ODD</em> number</h1>');
    }
}