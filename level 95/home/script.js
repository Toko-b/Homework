const API_KEY = "83d4fa4867954fa197e104100251808"
const cityName = document.getElementById("cityName");
const btn = document.getElementById("submit")
const form = document.querySelector("form");
let div1 = document.getElementById("div1")
const API = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=1&aqi=no&alerts=no`
const API2 = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=1&aqi=no&alerts=no`;

const myWeatherAsyncFunc = async () => {
    const data = await fetch(API)
        .then((response) => response.json())
        .then((data) => data)

    console.log('ლომიიიი');
    console.log(data);
    console.log("დავამთავრე დათოვ");
    div1.innerHTML = data.location.name;
}

form.addEventListener("submit", async () => {
    event.preventDefault();
    const weather = myWeatherAsyncFunc()
    console.log(weather)
})

const asyncPromiseFunction = async () => {
    const data2 = await fetch(API2)
        .then(response => response.json())
        .then((data) => data)
    if (!data2.ok) {
        console.log("შეცდომაა ლომო");
    } else {
        console.log("შესრულდა წარმატებით")
        console.log(data2)
    }
}

asyncPromiseFunction()

const btn2 = document.getElementById("click");
const ul = document.querySelector("ul")
btn2.addEventListener("click", async () => {
    const data3 = await fetch(API)
        .then(response => response.json())
        .then((data) => data)
    let li = document.createElement("li");
    li.innerHTML = data3.location.name
    ul.appendChild(li)
})