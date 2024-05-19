var Warning = document.getElementById('warning');
var guessedNumber = document.getElementById('guessed-number');
var guessResult = document.getElementById('guess-result');


function Guessed() {
    const randomNumber = Math.round(Math.random() * 20);
    const numberGuess = document.getElementById('input-box').value;
    const guess = parseInt(numberGuess)

     if (numberGuess.length == 0 || numberGuess.length == "") {
        Warning.innerHTML = 'Please enter a number to guess';
        document.getElementById('input-box').style.border = '1px solid red';
        document.getElementById('submit').style.border = '1px solid red';

        setTimeout(() => {
            document.getElementById('input-box').style.border = '1px solid #fff';
            document.getElementById('submit').style.border = '1px solid #fff';
            document.getElementById('warning').style.display = none;
        }, 3000);
        return false;
    }

    if (guess >= 21) {
        Warning.innerHTML = 'You can only guess between 0 and 20'
        return false;
    }

    if (guess === randomNumber) {
        guessedNumber.innerHTML = randomNumber;
        guessResult.innerHTML = `${guess} You guessed right`;
        return false;
    } else {
        guessedNumber.innerHTML = randomNumber;
        guessResult.innerHTML = `${guess} You guessed wrong!`;
        return false;
    }

}



