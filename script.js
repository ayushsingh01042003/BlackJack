let startButton = document.getElementById("StartButton");
let messageEl = document.getElementById("messageEl");
let sumEl = document.getElementById('sumEl');
let cardsEl = document.querySelector('#cardsEl');
let newCardButton = document.querySelector('#NewCard');

let messageDisplayed = "";
let sum = 0, firstCard = 0, secondCard = 0;
let cards = [];

//TODO: add an array of cards to make displaying of cards on screen easier
function startGame() {
    renderGame();
}

let generateCards = () => {
    firstCard = Math.floor(Math.random() * 10) + 2;
    secondCard = Math.floor(Math.random() * 10) + 2;    
    cards.push(firstCard, secondCard);
};

let checkBlackJack = () => {
    if(sum < 21) {
        messageDisplayed = `Do you want to draw a new card?`
    } else if (sum === 21) {
        messageDisplayed =  `BlackJack!`
    } else {
        messageDisplayed = `You lost`
    }
};

let displayOnScreen = () => {
    messageEl.innerText = messageDisplayed;
    sumEl.innerHTML = `Sum: ${sum}`

    let textPart = `Cards: `, numPart = "";
    for(let i = 0; i < cards.length; i++) {
        numPart += cards[i] + " ";
    }
    cardsEl.innerHTML = textPart + numPart;
};

let renderGame = () => {
    cards = [];
    //generate random numbers between 2 - 11
    generateCards();
    sum = firstCard + secondCard;
    checkBlackJack();
    displayOnScreen();
};

startButton.addEventListener("click", renderGame);

let drawNewCard = () => {
    messageEl.innerHTML = `Drawing A new Card from the Deck!`
    let newCard = Math.floor(Math.random() * 10) + 2;
    sum += newCard;
    cards.push(newCard);
    checkBlackJack();
    displayOnScreen();
};

newCardButton.addEventListener("click", drawNewCard);

