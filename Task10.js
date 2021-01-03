let myPassword='Space-7';
let enteredPassword=prompt('Please enter password');

if(enteredPassword===""){
    alert('Please enter the password');
}else if (myPassword===enteredPassword){
    document.write('<h2>Correct! The password you entered maches the original password</h2>');
}
else{
    document.write('<h2>Incorrect password</h2>')
};
