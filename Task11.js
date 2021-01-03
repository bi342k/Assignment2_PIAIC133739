let enteredTime=Number(prompt('Please enter the time in 24 hourse formate'));

if (isNaN(enteredTime) || enteredTime > 2400){
    alert('Please enter valid time');
}
else{
    if(enteredTime >= 0000 && enteredTime < 1200){
        document.write('<h3>Good Morning!</h3>');
    }
    else if (enteredTime >= 1200 && enteredTime < 1700){
        document.write('<h3>Good Afternoon!</h3>');
    }
    else if(enteredTime >= 1700 && enteredTime < 2100){
        document.write('<h3>Good Evening!</h3>');
    }
    else if(enteredTime >= 2100 && enteredTime <= 2359){
        document.write('<h3>Good Night!</h3>');
    }
}

