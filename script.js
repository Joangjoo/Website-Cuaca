
const apiKey = "7bdc83e00201cfd6b6b52e0e11cce431"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const cuacaIcon = document.querySelector(".cuaca-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if (response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".cuaca").style.display = "none"
    }
    var data = await response.json()

    document.querySelector(".kota").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"


    if (data.weather[0].main == "Clouds"){
        cuacaIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear"){
        cuacaIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain"){
        cuacaIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        cuacaIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
        cuacaIcon.src = "images/mist.png"
    }

    document.querySelector(".cuaca").style.display = "block"
    document.querySelector(".error").style.display = "none"
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


