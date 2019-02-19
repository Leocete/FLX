const cardParameters = {
    tax: 0.05,
    cardsLimit: 3
}

function userCard(cardNumber) {

    const cardInformation = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: cardNumber
    }

    // returns object which contain information about card
    function getCardOptions() {
        return cardInformation;
    }

    // receives amount of credits and fills up balance of card
    function putCredits(amount) {
        cardInformation.balance = cardInformation.balance + amount;
        historyUpdate('Received credits', amount);
    }

    // receives amount of credits and reduces these credits from balance of card
    function takeCredits(amount) {
        cardInformation.balance = cardInformation.balance - amount - amount * cardParameters.tax;
        historyUpdate('Withdrawal of credits', amount);
    }

    // receives amount of credits and set them as transaction limit of the card
    function setTransactionLimit(amount) {
        cardInformation.transactionLimit = amount;
        historyUpdate('Transaction limit change', amount);
    }

    // transfer credits from one card to the another
    function transferCredits (amount, card) {
        let amountWithTaxes = amount + amount * cardInformation.tax;
        if (amountWithTaxes > cardInformation.balance) {
            console.error('Not enough money');
        } else if (amountWithTaxes > cardInformation.transactionLimit) {
            console.error('Amount exceeds the Transaction limit');
        } else {
            this.takeCredits(amount);
            card.putCredits(amount);
        }
    }
    // Logs about past transactions
    function historyUpdate(operation, credits) {
        let report = {
            operation,
            credits,
            operationTime: new Date().toLocaleString('en-GB')
        };
        cardInformation.historyLogs.push(report);
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length > cardParameters.cardsLimit) {
            console.error('You\'ve got too many cards');  
        } else { 
            this.cards.push(userCard(this.cards.length + 1));
        }
    }

    getCardByKey(cardNumber) {
        return this.cards[cardNumber-1];
    }
}