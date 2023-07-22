// Data
// Variable to store element
// Function to get the data from weather api
// Manipulate the variable of already created elements

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please enter the city name!");
        return;
    }
    
    const city = inputBox.value;

    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=98957221c82e4f34b7974121232207&q=${city}`);
    const orgData = await fetchData.json();
    data = orgData;

    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph;
    temperature.innerHTML = data.current.temp_c;
    logoImage.src = data.current.condition.icon;
    weatherStatus.innerHTML = data.current.condition.text;
};