let h1 = document.querySelector("h1");

onload = setTime;
function setTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    h1.innerHTML = hour + ":" + minute + ":" + second;
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (hour > 12) {
        hour = hour - 12;
        h1.innerHTML = hour + ":" + minute + ":" + second + " " + "PM";
    } else {
        h1.innerHTML = hour + ":" + minute + ":" + second + " " + "AM";
    }
}

setInterval(setTime, 1000);
