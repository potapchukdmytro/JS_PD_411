function btnHtmlClick() {
    alert("Html click")
}

function btnObjectClick() {
    alert("Object click")
}

function btnEventListenerClick() {
    alert("Event listener")
}

// подія яка спрацьовує після повного завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
    const btnObject = document.getElementById("btnObject");
    btnObject.onclick = btnObjectClick;

    const btnListener = document.getElementById("btnListener");
    btnListener.addEventListener("click", btnEventListenerClick);

    document.addEventListener("keydown", randomColor);

    document.addEventListener("mousemove", circleMove)
});

// document.addEventListener("click", () => {
//     console.log("clicked");
// });


// click
const activeColor = "#1c93b4a1";
const noActiveColor = "#808080";
let activeBox = null;

function boxClick(event) {  
    if(activeBox) {
        activeBox.style.backgroundColor = noActiveColor;
    }

    activeBox = event.target;
    activeBox.style.backgroundColor = activeColor;
}


// mouseenter mouseleave
function enterBox(event) {
    event.target.style.opacity = 0;
}

function leaveBox(event) {
    event.target.style.opacity = 100;
}

// keydown random color
function randomColor(event) {        
    const box = document.getElementById("superBox");

    if (event.code === 'KeyC' && event.shiftKey) {
        box.style.backgroundColor = "grey";
    }
    else if(event.code === 'KeyC') {
        const r = Math.floor(Math.random() * 256); // 0 - 255
        const g = Math.floor(Math.random() * 256); // 0 - 255
        const b = Math.floor(Math.random() * 256); // 0 - 255
        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } 
}

// Mousemove
function circleMove(event) {
    const x = event.pageX;
    const y = event.pageY;
    const circle = document.getElementById("circle");
    const width = parseInt(circle.style.width.split("px")[0]);
    const height = parseInt(circle.style.height.split("px")[0]);
    
    circle.style.top = (y - height / 2) + "px";
    circle.style.left = (x - width / 2) + "px";
}