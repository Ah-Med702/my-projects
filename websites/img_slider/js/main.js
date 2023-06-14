let imgs = document.querySelectorAll("img");
let imgsArr = Array.from(imgs);
let imgsCount = imgsArr.length;

let currentImg = 1;

// create ul

let ul = document.createElement("ul");
ul.classList.add("list-group", "position-absolute", "mb-2", "z-2");

for (let i = 0; i < imgsArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = i + 1;
    ul.appendChild(li);
    document.querySelector(".container").appendChild(ul);
}

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

// buttons function
nextButton.onclick = function () {
    if (currentImg < imgsCount) {
        currentImg = currentImg + 1;
        removeActive();
        imgActive();
        listActive();
        addDisable();
    }
};
prevButton.onclick = function () {
    if (currentImg > 1) {
        currentImg = currentImg - 1;
        removeActive();
        imgActive();
        listActive();
        addDisable();
    }
};
// add disable class to buttons
function addDisable() {
    if (currentImg == 1) {
        prevButton.classList.add("disable");
    } else {
        prevButton.classList.remove("disable");
    }
    if (currentImg == imgsCount) {
        nextButton.classList.add("disable");
    } else {
        nextButton.classList.remove("disable");
    }
}
addDisable();

//add class active to imgs

imgsArr.forEach(imgActive);
function imgActive() {
    imgsArr[currentImg - 1].classList.add("active");
}

//add class active to list

let list = document.querySelectorAll("ul li");
list.forEach(listActive);
function listActive() {
    list[currentImg - 1].classList.add("active");
}

// remove class active from all elements

function removeActive() {
    imgsArr.forEach((e) => e.classList.remove("active"));
    list.forEach((e) => e.classList.remove("active"));
}

for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        removeActive();
        list[i].classList.add("active");
        currentImg = i + 1;
        imgActive();
        listActive();
        addDisable();
    };
}
