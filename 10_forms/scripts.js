function loginFormHandle(event) {
    event.preventDefault(); // зупиняє виконання форми

    const form = event.target;

    // const email = form["email"].value;
    // const password = form["password"].value;

    // const loginData = {
    //     email: email,
    //     password: password
    // };

    // console.log(loginData);

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const checkbox = form["rules"];
    console.log(checkbox.checked);
    console.log(values);
}