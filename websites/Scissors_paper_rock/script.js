function play() {
    const choices = [
        { name: "Scissors", src: "images/image3.jpg" },
        { name: "Paper", src: "images/image1.jpg" },
        { name: "Rock", src: "images/image2.jpg" }
    ];
    const randomIndex1 = Math.floor(Math.random() * choices.length);
    const randomIndex2 = Math.floor(Math.random() * choices.length);
    const choice1 = choices[randomIndex1];
    const choice2 = choices[randomIndex2];

    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = "";

    const img1 = document.createElement("img");
    img1.classList.add("choice");
    img1.src = choice1.src;
    resultDiv.appendChild(img1);

    const img2 = document.createElement("img");
    img2.classList.add("choice");
    img2.src = choice2.src;
    resultDiv.appendChild(img2);
    
    const p1 = document.createElement("p");
    p1.innerHTML = "Player 1: " + choice1.name;
    p1.classList.add("player");
    resultDiv.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerHTML = "Player 2: " + choice2.name;
    p2.classList.add("player");
    resultDiv.appendChild(p2);
}
