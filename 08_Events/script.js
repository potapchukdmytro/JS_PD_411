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

    document.addEventListener("keydown", randomColor)
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
    if(event.key === 'c') {
        console.log(event);
    } else if (event.key === 'c' && event.shiftKey) {

    }
}