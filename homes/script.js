// const url = "https://dog.ceo/api/breeds/list/all";
// fetchDogBreeds();

// async function fetchDogBreeds() {
//     try {
//         const response = await fetch(url);   
//         const data = await response.json();
//         const breeds = data.message;
//         const list = document.getElementById("list");

//         for (const item in breeds) {
//             list.innerHTML += `<li>${item}</li>`;
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

function changeColorHandle(event) {
    const button = event.target;
    const text = document.getElementById("text");
    // text.style.color = button.style.backgroundColor;
    text.style.color = button.dataset.color;
}