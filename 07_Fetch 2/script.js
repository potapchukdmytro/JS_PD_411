document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("image");
    image.hidden = true;

    fetchCharacters();
});

// document.addEventListener("DOMContentLoaded", () => {
//     // тут пишеться код який повинен спрацювати при заході на сайт
// }); 

async function fetchCat() {
    const url = "https://cataas.com/cat";

    const response = await fetch(url);
    const data = await response.blob();
    const imageUrl = URL.createObjectURL(data);
    const image = document.getElementById("image");
    image.hidden = false;
    image.src = imageUrl;

    // const imageBlock = document.getElementById("image");
    // imageBlock.innerHTML = `<img height="400" id="image" src="${imageUrl}" alt="cat">`;
}

function fetchCharacters() {
    // then catch
    const url = "https://thronesapi.com/api/v2/Characters";

    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();  
    //     console.log(data);
    // } catch (error) {
    //     console.log(error);
    // }
    const table = document.getElementById("gotTable");

    fetch(url)
    .then(response => response.json())
    .then(data => { 
        for (const char of data) {
            table.innerHTML += `<tr>
                        <th scope="row">${char.id}</th>
                        <td>${char.fullName}</td>
                        <td>${char.title}</td>
                        <td><img class="img-scale" height="50" src="${char.imageUrl}" alt="${char.fullName}"></td>
                    </tr>`;
        }
    })
    .catch(error => console.log(error));
}