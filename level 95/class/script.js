fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
// console.log(vfexvi());
// console.log(lomi());
console.log("ლომიიიიი");

function asyncPromiseFunction(work) {
    return new Promise((resolve, reject) => {
        if (work === "")
            reject(Error("Nothing Katleti"));
        setTimeout(function () {
            resolve(work);
        }, 1000);
    })
}

asyncPromiseFunction("working 1")
    .then((result) => {
        console.log("lomi")
    })
    .catch((err) => {
        console.log(err)
    })

const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
const cityName = "lomi"
const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

const myWeatherAsyncFunc = async () => {
    const data = await fetch(API)
        .then((response) => response.json())
        .then((data) => data)

    console.log(data)
    console.log(data.main.humidity)
    console.log(data.wind.speed)
}
myWeatherAsyncFunc()