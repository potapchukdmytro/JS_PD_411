// cookie

function setCookie() {
    document.cookie = "username=dima;path=/;expires=Thu, 11 Dec 2025 16:56:32 GMT"

    let date = new Date();
    date.setDate(date.getDate() + 1)
    document.cookie = "login=admin;path=/;expires=" + date.toUTCString()

    date = new Date();
    date.setMinutes(date.getMinutes() + 1)
    document.cookie = `tmp=value;expires=${date.toUTCString()};path=/`
}