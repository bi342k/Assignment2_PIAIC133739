let firstNumber=Number(prompt('Enter first number'));
let secondNumber=Number(prompt('Enter Second number'));
let operator=prompt('Enter operater (+ , - , * , / , %)');
let Result = 0;

if(isNaN(firstNumber) || isNaN(secondNumber)){
    alert('You have not entered a valid number');
}
else{
    if(operator==='+'){
        Result = firstNumber + secondNumber;
        document.write(`<h1>Sum = ${Result}</h1>`)
    } else
    if(operator==='-'){
        Result = firstNumber - secondNumber;
        document.write(`<h1>Substrucion = ${Result}</h1>`)
    } else
    if(operator==='*'){
        Result = firstNumber * secondNumber;
        document.write(`<h1>Multiplication = ${Result}</h1>`)
    } else
    if(operator==='/'){
        Result = firstNumber / secondNumber;
        document.write(`<h1>Division = ${Result.toFixed(2)}</h1>`)
    } else
    if(operator==='%'){
        Result = firstNumber % secondNumber;
        document.write(`<h1>Remainder = ${Result}</h1>`)
    } else {
        alert('You have not entred a valid operator')
    }

}