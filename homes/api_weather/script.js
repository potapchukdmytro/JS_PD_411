const apiKey = "5b3e1962e851cae3aa03c407c1743565";
const cityName = "rivne";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { list } = data;
    const now = new Date();
    for (let i = now.getDate(); i < now.getDate() + 6; i++) {        
        const days = list.filter(h => new Date(h.dt * 1000).getDate() === i);        
        dayHours(days);
    }
});

function dayHours(items) {
    const weather = document.getElementById("weather");
    const day = document.createElement("div");
    day.classList.add("day");
    for (const item of items) {
        const { dt, main } = item;
        const { temp } = main;
        const date = new Date(dt * 1000);
        day.innerHTML += `<h5>${date.getHours()}:0${date.getMinutes()}</h5>
        <h6>${temp}</h6>`;
    }
    weather.append(day);
}
