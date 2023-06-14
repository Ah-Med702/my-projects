let card = document.querySelectorAll(".img");
let flippedCards = [];
let matchedCards = 0;

card.forEach((e) => {
    e.addEventListener("click", flipp);
});

function flipp() {
    flippedCards.push(this);
    if (flippedCards[0] !== flippedCards[1]) {
        this.classList.add("flipped");
        checkForMatch();
    } else {
        flippedCards.splice(1, 1);
    }
}
function checkForMatch() {
    if (flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute("data-social") ==
            flippedCards[1].getAttribute("data-social")
        ) {
            matchedCards++;
            matched();
            if (matchedCards === 8) {
                showCongratulations();
            }
        } else {
            unflipCards();
        }
    }
}
function matched() {
    flippedCards[0].classList.add("matched");
    flippedCards[1].classList.add("matched");
    flippedCards = [];
}
function unflipCards() {
    setTimeout(() => {
        flippedCards.forEach((card) => card.classList.remove("flipped"));
        flippedCards = [];
    }, 1000);
}

let congrats = document.getElementById("congrats");
function showCongratulations() {
    congrats.style.display = "block";
}

let replayBtn = document.getElementById("replay");
replayBtn.addEventListener("click", () => {
    congrats.style.display = "none";
    resetGame();
});
function resetGame() {
    matchedCards = 0;
    card.forEach((img) => img.classList.remove("matched"));
    shuffleCards();
    flippedCards = [];
    setTimeout(() => {
        card.forEach((img) => img.classList.remove("flipped"))
    },2000)
}

function shuffleCards() {
    for (let i = card.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        card[randomIndex].style.order = i;
        card[i].style.order = randomIndex;
    }
}
