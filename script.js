let startButton = document.getElementById("StartButton");
let messageEl = document.getElementById("messageEl");
let sumEl = document.getElementById('sumEl');
let cardsEl = document.querySelector('#cardsEl');
let newCardButton = document.querySelector('#NewCard');

let messageDisplayed = "";
let sum = 0, firstCard = 0, secondCard = 0;

//TODO: add an array of cards to make displaying of cards on screen easier

let generateCards = () => {
    firstCard = Math.floor(Math.random() * 10) + 2;
    secondCard = Math.floor(Math.random() * 10) + 2;    
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
    //cardsEl.innerHTML = `Cards: ${firstCard} , ${secondCard}`
    sumEl.innerHTML = `Sum: ${sum}`
};

let startGame = () => {
    //generate random numbers between 2 - 11
    generateCards();
    sum = firstCard + secondCard;
    checkBlackJack();
    cardsEl.innerHTML = `Cards: ${firstCard} , ${secondCard}`
    displayOnScreen();
};

startButton.addEventListener("click", startGame);

let drawNewCard = () => {
    messageEl.innerHTML = `Drawing A new Card from the Deck!`
    let newCard = Math.floor(Math.random() * 10) + 2;
    sum += newCard;
    checkBlackJack();
    cardsEl.innerHTML = `Cards: ${firstCard}, ${secondCard}, ${newCard}`;
    displayOnScreen();
};

newCardButton.addEventListener("click", drawNewCard);

