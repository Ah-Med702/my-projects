let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
// let x = 0
// let y = 0
// let z = 0

onload = setDate()
function setDate() {
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    hour.style.transform = `rotate(${h * 30}deg)`;
    minute.style.transform = `rotate(${m * 6}deg)`;
    second.style.transform = `rotate(${s * 6}deg)`;
    // console.log(660-360/)
}

setInterval(() => {
    setDate();
},1000)

