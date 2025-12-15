function First() {
    // Spread та destructuring
    const arr1 = [1, 555, 4, 67, 32, 35, 57, 83, 69, 9];
    const arr2 = [...arr1];

    arr1[0] = 999;

    console.log(arr1);
    console.log(arr2);

    const obj1 = { type: "default", value: 1 };
    const obj2 = { ...obj1 };

    const { value, type } = obj1;
    console.log(value);
    console.log(type);

    // const arr1 = [1,555,4,67,32,35,57,83,69,9];
    const [first, second] = arr1;
    console.log(first);
    console.log(second);

    const state = [5, () => {}];
    const [number, setNumber] = state;

    // const inputName = document.getElementById("name");
    // const {value, name} = inputName;
    // console.log(inputValue);
    // console.log(name);

    const tag = {
        name: "div",
        width: "100px",
        height: "50px",
        color: "black",
        id: "box",
    };

    function boxArea({ width, height }) {
        if (!width || !height) {
            return 0;
        }

        const wInt = parseInt(width.split("px")[0]);
        const hInt = parseInt(height.split("px")[0]);
        return wInt * hInt;
    }

    console.log(boxArea(tag));
}

function Second() {
    const myValue = {
        id: 1,
        value: 50,
        type: "int",
    };

    const newValue = { ...myValue, date: new Date() };
    console.log(newValue);

    const result = { ...newValue, id: 2 };
    console.log(result);

    const user = {
        firstName: "Mike",
        lastName: "Thomson",
    };

    const cred = {
        login: "mike",
        password: "qwerty",
    };

    const mike = { ...user, ...cred };
    console.log(mike);

    function sum(...values) {
        let res = 0;
        for (const item of values) {
            res += item;
        }
        return res;
    }

    const sumRes = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log(sumRes);

    const numbers = [1, 2, 3, 4, 5, 6];
    const newNumbers = [...numbers, 7, 8, 9, 10];
    console.log(newNumbers);

    let personalData = {
        email: "user@mail.com",
        firstName: "Mike",
        lastName: "Thomson",
        age: 50,
        address: "Soborna str",
    };

    personalData = { ...personalData, email: "newemail@mail.com", age: 40 };
}


function printTitle(text, color) {
    const title = document.getElementById("title");
    title.style.color = color;
    title.innerText = text;
}

function clickHandle() {
    const timeoutId = setTimeout(printTitle, 5000, "Ukraine", "#FF0000");
    setTimeout(() => {
        console.log("Freeze 2 sec");
    }, 2000);

    const stopBtn = document.getElementById("stopBtn");
    stopBtn.addEventListener("click", () => { clearTimeout(timeoutId); });
}

let count = 0;

function addItem() {
    const list = document.getElementById("list");
    list.innerHTML += `<li>${++count}</li>`;
}

function generateHandle() {
    setInterval(addItem, 2000);
}

function startCounterHandle() {
    const counter = document.getElementById("counter");
    const intervalId = setInterval(() => {
        let c = parseInt(counter.innerText);
        c++;
        counter.innerText = c;
    }, 100);
    const stopBtn = document.getElementById("pauseCounterBtn");
    stopBtn.addEventListener("click", () => clearInterval(intervalId));
}

function stopCounterHandle() {
    const stopBtn = document.getElementById("pauseCounterBtn");
    stopBtn.click();
    const counter = document.getElementById("counter");
    counter.innerText = 0;
}

function pxToInt(value) {
    return parseInt(value.split("px")[0]);
}

function moveDir(dir) {
    const box = document.getElementById("box");
    let x = pxToInt(box.style.left);
    let y = pxToInt(box.style.top);   
    const step = 10;
    switch (dir) {
        case "right":
            x += step;
            box.style.left = `${x}px`;
            break;
        case "left":
            x -= step;
            box.style.left = `${x}px`;
            break;
        case "up":
            y -= step;
            box.style.top = `${y}px`;
            break;
        case "down":
            y += step;
            box.style.top = `${y}px`;
            break;
    }
}

let dir = "right";
function moveBox() {
    const box = document.getElementById("box");
    let x = pxToInt(box.style.left);
    let y = pxToInt(box.style.top);    
    const width = pxToInt(box.style.width);
    const height = pxToInt(box.style.height);
    const step = 1;
    
    if (x < window.innerWidth - width - step - 5 && dir == "right" && y < height) {
        moveDir("right");
        return;
    }
    else {
        dir = "down";
    }
    if(y < window.innerHeight - height - step && dir == "down" && x >= window.innerWidth - width - step - 5 ) {
        moveDir("down");
        return;
    } else {
        dir = "left";
    }   
    if(x > 0 && dir == "left" && y >= window.innerHeight - height - step) {
        moveDir("left");
        return;
    } else {
        dir = "up";
    } 
    if(y > 0 && dir == "up" && x < width) {
        moveDir("up");
        return;
    } else {
        dir = "right";
    }
}


function startBoxMove() {
    const id = setInterval(moveBox, 10);
    const stopBtn = document.getElementById('stopBoxMove');
    stopBtn.addEventListener("click", () => clearInterval(id));
}