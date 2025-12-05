// const boxes = document.getElementsByTagName("div");
// for (const box of boxes) {
//     box.style.backgroundColor = "grey";
// }
const container = document.getElementById("container");

function randomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function removeBoxHandle(event) {
    const box = event.target;
    // box.remove();
    container.removeChild(box);
}

function mouseEnterHandle(event) {
    const box = event.target;
    box.innerHTML = "<span>X</span>";
}

function mouseLeaveHandle(event) {
    const box = event.target;
    box.innerHTML = "<span> </span>";
}

function createBoxHandle() {
    const circle = document.getElementById("circle");

    const box = document.createElement("div");
    box.classList.add("box");
    // const span = document.createElement("span");
    // span.innerText = " ";
    // box.appendChild(span);

    // Color
    // box.style.backgroundColor = randomRgb();
    const color = document.getElementById('boxColor').value;
    box.style.backgroundColor = color;

    // Figure
    if(circle.checked) {
        box.style.borderRadius = "50%";
    }
    box.addEventListener("click", removeBoxHandle);
    // box.addEventListener("mouseenter", mouseEnterHandle);
    // box.addEventListener("mouseleave", mouseLeaveHandle);
    container.appendChild(box);
}