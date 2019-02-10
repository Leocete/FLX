let maxNumber = 5;
let prizeAmount = 0;
let possiblePrize = 10;
let attemptsNumber = 3;
let gameNumber = Math.floor(Math.random() * maxNumber);
let userDecision = confirm('Do you want to play a game?');
let currentPrize = possiblePrize;

if (userDecision) {
    while (attemptsNumber > 0) {

        let userNumber = +prompt(`
                Enter a number from 0 to ${maxNumber}
                Attempts left: ${attemptsNumber}
                Total prize: ${prizeAmount}$
                Possible prize on current attempt: ${currentPrize}$;
                `)
        // Check if user's entered number is the correct one      
        if (userNumber === gameNumber) {
            prizeAmount += currentPrize;
            let playConfirm = confirm(`Congratulation! Your prize is: ${prizeAmount}$. Do you want to continue?`);
            // Check if user wants continue to play the game / update the game info
            if (playConfirm) {
                maxNumber *= 2; 
                possiblePrize *= 3;
                attemptsNumber = 3;
                gameNumber = Math.floor(Math.random() * maxNumber);
                currentPrize = possiblePrize;
            } else {
                alert(`Thank you for a game. Your prize is: ${prizeAmount}$`);
            }

        } else {
            attemptsNumber--;
            currentPrize = Math.floor(currentPrize / 2);
        }
    } // end of the loop  
    alert(`Thank you for a game. Your prize is: ${prizeAmount}$`);
} else {
    alert('You did not become a millionaire, but can.');
} // end of 'if(userDecision)...'
