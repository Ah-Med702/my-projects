let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.display = "block";

    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
});

document.onmouseleave = () => {
    cursor.style.display = "none";
};

let scale = document.querySelector(".scale");

    scale.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
    });
    scale.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
    });
let scaleMin = document.querySelectorAll(".scale-min");

scaleMin.forEach(ele => {
    ele.addEventListener("mousemove", () => {
        cursor.classList.add("grow-min");
    });
    ele.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow-min");
    });
})


