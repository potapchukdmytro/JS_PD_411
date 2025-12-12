function setCookieByDays(name, value, days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${name}=${value};path=/;expires=${date.toUTCString()}`;
}

// читання
function getCookie(name) {
    const cookie = document.cookie.split("; ");
    for (const item of cookie) {
        const data = item.split("=");
        if(data[0] === name) {
            return data[1];
        }
    }
    return null;
}

// видалення
function deleteCookie(name) {
    document.cookie = `${name}=;path=/;expires=Thu, 1 January 1970 00:00:00 GMT`
}

function addRgbHandle() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const code = `(${r}, ${g}, ${b})`;
    const list = document.getElementById("list");
    list.innerHTML += `<li>${code}</li>`;

    const cookie = getCookie("codes");
    if(cookie) {
        const arr = JSON.parse(cookie);
        arr.push(code);
        setCookieByDays("codes", JSON.stringify(arr), 1);
    } else {
        setCookieByDays("codes", JSON.stringify([code]), 1);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cookie = getCookie("codes");
    if(cookie) {
        const arr = JSON.parse(cookie);
        const list = document.getElementById("list");
        for (const item of arr) {
            list.innerHTML += `<li>${item}</li>`;
        }
    }
});