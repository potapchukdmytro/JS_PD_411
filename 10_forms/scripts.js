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
    
    form.reset();
}

function selectPicture(event) {
    const input = event.target;
    const images = input.files;
    const container = document.getElementById("preview");
    container.innerHTML = "";

    for (const image of images) {
        // <img width="100" src="" alt="picture" hidden id="picture">
        const url = URL.createObjectURL(image);
        container.innerHTML += `<img width="100" src="${url}" alt="${image.name}">`;
    }

    // if(picture) {
    //     const url = URL.createObjectURL(picture);
    //     const img = document.getElementById("picture");
    //     img.src = url;
    //     img.hidden = false;
    // }
}

function selectAudio(event) {
    const audio = event.target.files[0];

    if(audio) {
        const url = URL.createObjectURL(audio);
        const player = document.getElementById("audioPlayer");
        player.src = url;
    }
}