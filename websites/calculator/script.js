let btns = document.querySelectorAll(".btn");
let input = document.getElementById("input");
let arr = [];

input.onkeyup = () => {
    input.value = "";
    input.setAttribute("placeholder", "pleaes click on buttons");
};

// add event click for all btns
btns.forEach((e) => {
    e.addEventListener("click", btnClicked);
});

function btnClicked() {
    if (this.classList.contains("operation") == false) {
        arr.push(this.value);
        input.value += this.value;
    }
    console.log(arr);
}

let sum = document.getElementById("sum");
sum.addEventListener("click", () => {
    if (input.value !== "") {
        arr = [];
        input.value = eval(input.value);
        arr.push(input.value);
    }
});

let clearAll = document.getElementById("clearBtn");
clearAll.addEventListener("click", () => {
    input.value = "";
    arr = [];
});

let clearLast = document.getElementById("clearLast");
clearLast.addEventListener("click", () => {
    arr.splice(-1, 1);
    input.value = arr.join("");
});
