let yourCharacter = prompt('Enter character between A~Z or a~z').toLowerCase();

if (yourCharacter==='a' || 
    yourCharacter==='e' || 
    yourCharacter==='i' || 
    yourCharacter==='o' || 
    yourCharacter==='u')
{
    document.write('<h1>It is VOWEL</h1>');
}
else{
    document.write('<h1>FALSE</h1>');
}
