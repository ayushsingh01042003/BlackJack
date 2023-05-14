let startButton = document.getElementById("StartButton");
let messageEl = document.getElementById("messageEl");
let sumEl = document.getElementById('sumEl');
let cardsEl = document.querySelector('#cardsEl');
let newCardButton = document.querySelector('#NewCard');
let playerEl = document.getElementById('player-el');

let messageDisplayed = "";
let sum = 0, firstCard = 0, secondCard = 0;
let cards = [];
let isAlive = false, hasBlackJack = false;
let player = {
    name: "Ayush",
    chips: 69
};

function startGame() {
    playerEl.innerHTML = `${player.name}: $${player.chips}`;
    isAlive = true;
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
        hasBlackJack = true;
    } else {
        messageDisplayed = `You lost`
        isAlive = false;
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

startButton.addEventListener("click", startGame);

let drawNewCard = () => {
    if(isAlive === true && hasBlackJack !== true) {
        messageEl.innerHTML = `Drawing A new Card from the Deck!`
        let newCard = Math.floor(Math.random() * 13) + 1;
        sum += newCard;
        cards.push(newCard);
        checkBlackJack();
        displayOnScreen();
    } else {
        messageEl.innerText = `You cannot draw a new Card!!\nPress Start to play again`;
    }
};

newCardButton.addEventListener("click", drawNewCard);