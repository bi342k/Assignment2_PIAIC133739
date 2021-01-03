let traficColor=prompt('Enter Road Trafic Signal Color ');
traficColor = traficColor.toUpperCase();

if (traficColor==='RED'){
    document.write('<h3>Must Stop</h3>');
}
else if (traficColor==='YELLOW'){
    document.write('<h3>Ready to Move</h3>');
}
else if (traficColor==='GREEN'){
    document.write('<h3>Move Now</h3>');
}
else {
    document.write('<h3>You entered wrong color</h3>');
}
