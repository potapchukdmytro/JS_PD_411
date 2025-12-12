function jsonTemplate() {
    const user = {
        name: "John",
        surname: "Smith",
        age: 30,
        marks: [1, 2, 3, 4, 5, 6],
    };

    const data = [1, 2, 3, 4, 5, 6];

    // Object -> JSON
    const json = JSON.stringify(user);
    console.log(json);

    // JSON -> Object
    const arrJson = "[1,74,34587,35,5987,323,768]";
    const arr = JSON.parse(arrJson);
    for (const i of arr) {
        console.log(i);
    }

    // записати дані
    localStorage.setItem("username", "mike");

    const marks = [12, 12, 12, 11, 9, 10, 11];
    localStorage.setItem("marks", JSON.stringify(marks));

    localStorage.setItem("userData", JSON.stringify(user));

    // отримати дані. Якщо ключа не існує повернеться null
    const username = localStorage.getItem("username");
    if (username) {
        console.log(user);
    }

    // Видаляє елемент
    localStorage.removeItem("password");

    // Очищає сховище
    // localStorage.clear()
}

// SingIn
function signInHandle(event) {
    event.preventDefault();

    // Отримуємо об'єкти форми через target
    const form = event.target;


    // отримуємо значення з інпутів email та password
    const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");

    const credentials = {
        email: inputEmail.value,
        password: inputPassword.value
    }    

    // const credentials = {
    //     email: form["email"].value,
    //     password: form["password"].value,
    // };

    // Записуємо дані у local storage. 
    // Тому використовуємо функцію JSON.stringify що перетворити об'єкт credentials у JSON
    localStorage.setItem("user", JSON.stringify(credentials));

    // Очищає всі інпути на формі
    form.reset();

    setUserButtons(credentials);
}

function setUserButtons(user) {
const container = document.getElementById("authNavItem");
    container.innerHTML = `<button class="mx-4 btn btn-dark">${user.email}</button>
                <button onclick="logoutHandle()" class="mx-4 btn btn-dark">Logout</button>`;
}

document.addEventListener("DOMContentLoaded", () => {
    
    // Отримує user з localStorage у форматі JSON
    const u = '{"email": "user@mail.com", "password": "qwerty"}';
    const userJson = localStorage.getItem("user"); 
    if(userJson) {
        // Перетворюємо userJson у об'єкт функцією JSON.parse
        const user = JSON.parse(userJson);
    //      const res = {
    //      email: "user@mail.com",
    //      password: "qwerty",
    // }

        setUserButtons(user);
    }
});

function logoutHandle() {
    // Видаляю дані з ключем "user"
    localStorage.removeItem("user");
    const container = document.getElementById("authNavItem");
    container.innerHTML = `<button class="mx-4 btn btn-dark">Login</button>
                <button class="mx-4 btn btn-dark">Register</button>`;
}