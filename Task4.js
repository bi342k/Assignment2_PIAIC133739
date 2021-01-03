let total=0;
let totalMarks=0
let percentage=0
let displayResult = true
let subj1=prompt('Enter marks of Subject-1');
if (isNaN(Number(subj1)) || Number(subj1) < 0 ){
    alert('You have entered wrog number for Subject-1')
    displayResult = false;
}
else{
    let subj2=prompt('Enter marks of Subject-2');
    if (isNaN(Number(subj2)) || Number(subj2) < 0 ){            //Used Nested if so that if one input is wrong other should not be asked
        alert('You have entered wrong number for Subject-2')    //Since taking input at each stage so one if-else-if could not help
        displayResult = false;
    }
    else{
        let subj3=prompt('Enter marks of Subject-3');
        if (isNaN(Number(subj3)) || Number(subj3) < 0 ){
            alert('You have entered wrong number for Subject-3')
            displayResult = false;
        }
        else{
            let totalMark = prompt('Enter Total Marks');
            if (isNaN(Number(totalMarks)) || Number(totalMarks) < 0 ){
                alert('You have entered wrong total marks')
                displayResult = false;
            }
            else{
                total = Number(subj1)+Number(subj2)+Number(subj3)
                totalMarks=Number(totalMark)
            }
        }
    }
}

if(totalMarks < total){
    alert('You have entered total markes less than obtained marks');
    displayResult = false;
}
else if(displayResult){
    let percentage = total*100/totalMarks
    document.write('<h1>Marks Sheet</h1></br>')
    if (percentage >= 80 && percentage <= 100){
        document.write(`<h2>Total Marks : ${totalMarks}</h2>`);
        document.write(`<h2>Marks obtained : ${total}</h2>`);
        document.write(`<h2>Percentage : ${percentage.toFixed(2)}%</h2>`);
        document.write(`<h2>Grade : A-One</h2>`);
        document.write(`<h2>Remarks : Excellent</h2>`);
    }
    else if (percentage >= 70 && percentage < 80){
        document.write(`<h2>Total Marks : ${totalMarks}</h2>`);
        document.write(`<h2>Marks obtained : ${total}</h2>`);
        document.write(`<h2>Percentage : ${percentage.toFixed(2)} %</h2>`);
        document.write(`<h2>Grade : A</h2>`);
        document.write(`<h2>Remarks : Good</h2>`);
    }
    else if (percentage >= 60 && percentage < 70){
        document.write(`<h2>Total Marks : ${totalMarks}</h2>`);
        document.write(`<h2>Marks obtained : ${total}</h2>`);
        document.write(`<h2>Percentage : ${percentage.toFixed(2)}%</h2>`);
        document.write(`<h2>Grade : B</h2>`);
        document.write(`<h2>Remarks : You need to improve</h2>`);
    }
    else{
        document.write(`<h2>Total Marks : ${totalMarks}</h2>`);
        document.write(`<h2>Marks obtained : ${total}</h2>`);
        document.write(`<h2>Percentage : ${percentage.toFixed(2)}%</h2>`);
        document.write(`<h2>Grade : Fail</h2>`);
        document.write(`<h2>Remarks : Sorry</h2>`);
    }
}