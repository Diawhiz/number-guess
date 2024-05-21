const warning = document.getElementById('warning');
const guessedNumber = document.getElementById('guessed-number');
const guessResult = document.getElementById('guess-result');

function guessed() {
    const randomNumber = Math.round(Math.random() * 20);
    const numberGuess = document.getElementById('input-box').value;
    const guess = parseInt(numberGuess);

    if (numberGuess.length === 0) {
        warning.innerHTML = 'Please enter a number to guess';
        document.getElementById('input-box').style.border = '1px solid red';
        document.getElementById('submit').style.border = '1px solid red';

        setTimeout(() => {
            document.getElementById('input-box').style.border = '';
            document.getElementById('submit').style.border = '';
            warning.style.display = 'none';
        }, 3000);
        warning.style.display = 'block';
        return false;
    }

    if (guess < 0 || guess > 20) {
        warning.innerHTML = 'You can only guess between 0 and 20';
        warning.style.display = 'block';
        return false;
    }

    warning.style.display = 'none';

    if (guess === randomNumber) {
        guessedNumber.innerHTML = randomNumber;
        guessResult.innerHTML = `${guess} - You guessed right!`;
    } else {
        guessedNumber.innerHTML = randomNumber;
        guessResult.innerHTML = `${guess} - You guessed wrong!`;
    }

    return false;
}
