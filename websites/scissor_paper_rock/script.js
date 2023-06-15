let playBtn = document.getElementById("playBtn");
playBtn.onclick = play;

function play() {
    let choice = [
        { name: "Scissors", src: "images/image3.jpg" },
        { name: "Paper", src: "images/image1.jpg" },
        { name: "Rock", src: "images/image2.jpg" },
    ];

    let randomIndex1 = Math.floor(Math.random() * choice.length);
    let randomIndex2 = Math.floor(Math.random() * choice.length);

    let choice1 = choice[randomIndex1];
    let choice2 = choice[randomIndex2];

    let place1 = document.querySelector(".player1")
    let place2 = document.querySelector(".player2")

    let img1 = document.createElement("img");
    img1.src = choice1.src;
    place1.appendChild(img1)

    let img2 = document.createElement("img");
    img2.src = choice2.src;
    place2.appendChild(img2);

    let p1 = document.createElement("p");
    p1.innerHTML = `player 1 : ${choice1.name}`;
    place1.appendChild(p1)

    let p2 = document.createElement("p");
    p2.innerHTML = `player 2 : ${choice2.name}`;
    place2.appendChild(p2);
}
