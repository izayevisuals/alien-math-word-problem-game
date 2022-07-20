// "Need a hint?" button has the id of 'hint'. When you click "Need a hint?", the function 'checkHint' runs.
document.getElementById('hint').addEventListener('click', checkHint)

// "Submit" button has the id of 'submit'. When you click "Submit", the function 'checkAnswer' runs.
document.getElementById('submit').addEventListener('click', checkAnswer)

function checkHint(){
    let hint = document.getElementById('hintDisplay')
    
    if(hint.style.display === 'none'){
        hint.style.display = 'block' //Pushes the element on a new line
    } else{
        hint.style.display = 'none'
    }
}

function checkAnswer(){
    const answer = document.getElementById('answer').value
    
    // Each answer is in the order of mission... i.e. '40' is the answer for Mission 1... '10' is the answer for Mission 2... etc.

    // Mess with arrays? Or strings?
    if(answer === '40' || answer === '10' || answer === '28' || answer === '35' || answer === '115.24 million'){
        document.getElementById('answerDisplay').innerText = "Correct!" 
    }else{
        document.getElementById('answerDisplay').innerText = "Try again."
    }
}



