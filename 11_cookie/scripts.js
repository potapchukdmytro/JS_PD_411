// cookie

function setCookieHandle() {
    setCookie("username", "dima", "Thu, 11 Dec 2025 16:56:32 GMT");

    let date = new Date();
    date.setDate(date.getDate() + 1)
    setCookie("login", "admin", date.toUTCString());
    setCookie("password", "qwerty", date.toUTCString());
    setCookieByDays("lang", "uk", 2);
    // document.cookie = "login=admin;path=/;expires=" + date.toUTCString()
    // document.cookie = "password=qwerty;path=/;expires=" + date.toUTCString()
    // document.cookie = "lang=uk;path=/;expires=" + date.toUTCString()

    date = new Date();
    date.setMinutes(date.getMinutes() + 1)
    document.cookie = `tmp=value;expires=${date.toUTCString()};path=/`



    const arr = [1,2,3,4,5,6];
    const json = JSON.stringify(arr); // перетворює у JSON
    const data = JSON.parse(json); // перетворює із JSON у об'єкт
    setCookieByDays("array", json, 2);
}

function getCookieHandle() {
    const lang = getCookie("lang");
    console.log(lang);
}

function deleteCookieHandle() {
    deleteCookie("password");
}

// запис
function setCookie(name, value, expires) {
    document.cookie = `${name}=${value};path=/;expires=${expires}`;
}

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