let menu = document.querySelector(".toggle-menu");
let nav = document.querySelector("nav");

menu.addEventListener("click", function () {
    nav.classList.toggle("visible");
});

let container = document.querySelector(".articles-cont");
for (let i = 0; i < 6; i++) {
    let card = document.createElement("div");
    card.classList.add("card", `card-${i + 1}`);

    let top = document.createElement("div");
    top.classList.add("top");
    let img = document.createElement("img");
    img.src = `images/cat-0${i + 1}.png`;
    top.appendChild(img);

    let bottom = document.createElement("div");
    bottom.classList.add("bottom");
    let h3 = document.createElement("h3");
    h3.classList.add(`h3-${i + 1}`);
    h3.innerHTML = "Test Title";
    let p = document.createElement("p");
    p.classList.add(`p-${i + 1}`);
    p.innerHTML =
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit";
    bottom.appendChild(h3);
    bottom.appendChild(p);

    let a = document.createElement("a");
    a.href = "#";
    a.classList.add("info");
    let aH3 = document.createElement("h3");
    aH3.innerHTML = "Read More";

    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-arrow-right");

    a.appendChild(aH3);
    a.appendChild(icon);

    card.appendChild(top);
    card.appendChild(bottom);
    card.appendChild(a);
    container.appendChild(card);
}

let gallery = document.querySelector(".gallery-cont");
for (let i = 0; i < 6; i++) {
    let box = document.createElement("div");
    box.classList.add("box");

    let image = document.createElement("div");
    image.classList.add("image");

    let img = document.createElement("img");
    img.src = `images/gallery-0${i + 1}.png`;

    image.appendChild(img);
    box.appendChild(image);
    gallery.appendChild(box);
}

let testimonial = document.querySelector(".testimonials-cont");
for (let i = 0; i < 6; i++) {
    let card = document.createElement("div");
    card.classList.add("testimonial-card", `card-${i + 1}`);

    let image = document.createElement("div");
    image.classList.add("image");

    let img = document.createElement("img");
    img.src = `images/avatar-0${i + 1}.png`;

    image.appendChild(img);

    let arr = [
        "Mohamed Farag",
        "Mohamed Ibrahim",
        "Shady Nabil",
        "Amr Hendawy",
        "Sherief Ashraf",
        "Osama Mohamed",
    ];

    let h3 = document.createElement("h3");
    h3.innerHTML = `${arr[i]}`;

    let p = document.createElement("p");
    p.innerHTML = "Full Stack Developer";

    let star = document.createElement("div");
    star.classList.add("star");
    for (let j = 0; j < 5; j++) {
        let icon = document.createElement("i");
        icon.classList.add("filled", "fa", "fa-star");
        star.appendChild(icon);
    }

    let p2 = document.createElement("p");
    p2.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. . Maiores et reiciendis voluptatum, amet estnatus quaerat ducimus";

    card.appendChild(image);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(star);
    card.appendChild(p2);

    testimonial.appendChild(card);
}

function removeFilled() {
    let stars = document.querySelectorAll(".fa-star");
    let starsArr = Array.from(stars);
    let starGroup1 = starsArr.slice(0, 5);
    let starGroup2 = starsArr.slice(5, 10);
    let starGroup3 = starsArr.slice(10, 15);
    let starGroup4 = starsArr.slice(15, 20);
    let starGroup5 = starsArr.slice(20, 25);
    let starGroup6 = starsArr.slice(25, 30);

    starGroup1[4].classList.remove("fa");
    starGroup1[4].classList.add("far");
    starGroup2[4].classList.remove("fa");
    starGroup2[4].classList.add("far");
    starGroup3[4].classList.remove("fa");
    starGroup3[4].classList.add("far");
    starGroup5[4].classList.remove("fa");
    starGroup5[4].classList.add("far");
    starGroup5[3].classList.remove("fa");
    starGroup5[3].classList.add("far");
    starGroup6[4].classList.remove("fa");
    starGroup6[4].classList.add("far");
    starGroup6[3].classList.remove("fa");
    starGroup6[3].classList.add("far");
}
removeFilled();


let teamMembers = document.querySelector(".team-members-cont");
for (let i = 0; i < 6; i++) {
    let card = document.createElement("div");
    card.classList.add("team-members-card");

    let top = document.createElement("div");
    top.classList.add("top");


    let image = document.createElement("div");
    image.classList.add("image");

    let img = document.createElement("img");
    img.src = `images/team-0${i + 1}.png`;

    image.appendChild(img);

    let social = document.createElement("div");
    social.classList.add("social");

    let link1 = document.createElement("a")
    link1.href = "#"

    let facebookIcon = document.createElement('i')
    facebookIcon.classList.add("fab", "fa-facebook-f");

    link1.appendChild(facebookIcon)

    let link2 = document.createElement("a")
    link2.href = "#"

    let twitterIcon = document.createElement('i')
    twitterIcon.classList.add("fab", "fa-twitter");

        link2.appendChild(twitterIcon);


    let link3 = document.createElement("a")
    link3.href = "#"

    let linkedInIcon = document.createElement("i");
    linkedInIcon.classList.add("fab", "fa-linkedin-in");

    link3.appendChild(linkedInIcon);

    let link4 = document.createElement("a")
    link4.href = "#"

    let youtubeIcon = document.createElement('i')
    youtubeIcon.classList.add("fab", "fa-youtube");

link4.appendChild(youtubeIcon)

    social.appendChild(link1)
    social.appendChild(link2)
    social.appendChild(link3)
    social.appendChild(link4)

    let bottom = document.createElement("div");
    bottom.classList.add("bottom");

    let h2 = document.createElement("h2");
    h2.innerHTML = "Name";

    let p = document.createElement("p");
    p.innerHTML = "Simple Short Description";

    card.appendChild(top);
    top.appendChild(image);
    top.appendChild(social);
    card.appendChild(bottom);
    card.appendChild(bottom);
    bottom.appendChild(h2);
    bottom.appendChild(p);

    teamMembers.appendChild(card);
}

/* <div class="team-members-card">
                <div class="top">
                    <div class="image"><img src="images/team-01.png" alt="team-01"></div>
                    <div class="social">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="bottom">
                    <h2>Name</h3>
                        <p>Simple Short Description</p>
                </div>
            </div> */