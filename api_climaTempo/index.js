// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}



// Variáveis e seleção de elementos
const apiKey = "bbe6e86b0e21f349c89dcfcfe7735168";
const apiContryUrl = "https://flagsapi.com/png/";


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity");
const windElement = document.querySelector("#wind");




// Funções 

const getWeatherData = async(city) => {

    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    return data;
    

};



const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png` );
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    umidityElement.textContent = `${data.main.humidity}%`;
    windElement.textContent = `${data.wind.speed}km/h`;

    console.log(data);
};


// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;
    const weatherPart = document.querySelector("#weather-data");

    weatherPart.classList.remove('hide');


    showWeatherData(city);
});