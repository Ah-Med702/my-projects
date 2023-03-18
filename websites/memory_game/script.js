// const cards = document.querySelectorAll('.card');
// let flippedCards = [];
// let lockBoard = false;
// let matchedCards = 0;
// const congrats = document.getElementById('congrats');
// const closeButton = document.querySelector('.close-button');
// const playAgainButton = document.querySelector('.play-again');



// cards.forEach(card => {
//     card.addEventListener('click', function () {
//         this.classList.toggle('flipped');
//     });
// });

// function flipCard() {
//     if (lockBoard) return;
//     if (this === flippedCards[0]) return;

//     this.classList.add('flipped');

//     if (flippedCards.length === 0) {
//         flippedCards[0] = this;
//         return;
//     } else {
//         flippedCards[1] = this;
//         checkForMatch();
//     }
// }

// function checkForMatch() {
//     let isMatch = flippedCards[0].dataset.card === flippedCards[1].dataset.card;

//     if (isMatch) {
//         matchedCards++;
//         disableCards();
//         if (matchedCards === cards.length / 2) {
//             showCongratulations();
//         }
//     } else {
//         unflipCards();
//     }
// }

// function showCongratulations() {
//     congrats.style.display = 'block';
// }

// closeButton.addEventListener('click', function () {
//     congrats.style.display = 'none';
// });

// playAgainButton.addEventListener('click', function () {
//     congrats.style.display = 'none';
//     resetGame();
// });

// function resetGame() {
//     matchedCards = 0;
//     cards.forEach(card => card.classList.remove('flipped', 'disabled'));
//     cards.forEach(card => card.style.backgroundImage = 'url(images/background.png)');
//     // shuffle the cards
//     shuffleCards();
//     // add event listeners to cards
//     cards.forEach(card => card.addEventListener('click', flipCard));
// }

// // shuffle function
// function shuffleCards() {
//     for (let i = cards.length - 1; i > 0; i--) {
//         let randomIndex = Math.floor(Math.random() * (i + 1));
//         cards[randomIndex].style.order = i;
//         cards[i].style.order = randomIndex;
//     }
// }

// function disableCards() {
//     flippedCards[0].classList.add('matched');
//     flippedCards[1].classList.add('matched');

//     flippedCards = [];
// }

// function unflipCards() {
//     lockBoard = true;

//     setTimeout(() => {
//         flippedCards.forEach(card => card.classList.remove('flipped'));
//         flippedCards = [];
//         lockBoard = false;
//     }, 1500);
// }



// cards.forEach(card => card.addEventListener('click', flipCard));
// // ==========================================================================================================================

const cards = document.querySelectorAll('.card');
let flippedCards = [];
let lockBoard = false;
let matchedCards = 0;
const congrats = document.getElementById('congrats');
const closeButton = document.querySelector('.close-button');
const playAgainButton = document.querySelector('.play-again');

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

function flipCard() {
    if (lockBoard || this === flippedCards[0] || flippedCards.length === 2) return;
    this.classList.add('flipped');
    flippedCards.push(this);
    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    let isMatch = flippedCards[0].dataset.card === flippedCards[1].dataset.card;
    if (isMatch) {
        matchedCards++;
        disableCards();
        if (matchedCards === cards.length / 2) {
            showCongratulations();
        }
    } else {
        unflipCards();
    }
}

function showCongratulations() {
    congrats.style.display = 'block';
}

closeButton.addEventListener('click', function () {
    congrats.style.display = 'none';
});

playAgainButton.addEventListener('click', function () {
    congrats.style.display = 'none';
    resetGame();
});

function resetGame() {
    matchedCards = 0;
    cards.forEach(card => card.classList.remove('flipped', 'matched'));
    cards.forEach(card => card.style.backgroundImage = 'url(images/background.png)');
    shuffleCards();
    flippedCards = [];
    lockBoard = false;
}

function disableCards() {
    flippedCards[0].classList.add('matched');
    flippedCards[1].classList.add('matched');
    flippedCards = [];
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        flippedCards.forEach(card => card.classList.remove('flipped'));
        flippedCards = [];
        lockBoard = false;
    }, 1000);
}

// shuffle function
function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        cards[randomIndex].style.order = i;
        cards[i].style.order = randomIndex;
    }
}




