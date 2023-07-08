const Cityform = document.querySelector('[data-js="change-location"]');
const cityNameContainer = document.querySelector('[data-js="city-name"]');
const cityweatherContainer = document.querySelector('[data-js="city-weather"]');
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]');
const cityCardContainer = document.querySelector('[data-js="card shadow-lg rounded"]');
const timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')


const ShowCityWeatherInfo = (LocalizedName, WeatherText,Temperature, timeIcon, IsDayTime) => {
    timeImg.src = IsDayTime? './src/day.svg' : './src/night.svg';
    timeIconContainer.innerHTML = timeIcon;
    cityNameContainer.innerHTML = LocalizedName;
    cityweatherContainer.innerHTML = WeatherText; 
    cityTemperatureContainer.textContent = Temperature.Metric.Value;
}


const showCard = ()=> {
    const Containsclass = cityCardContainer.classList.contains('d-none');
    const removeClass = cityCardContainer.classList.remove('d-none');

    if(Containsclass) removeClass; 
}


Cityform.addEventListener('submit', async event => {
    event.preventDefault();

    const inputValue = event.target.city.value;

    const { Key, LocalizedName } = await getCityData(inputValue);
    const [{ Temperature, WeatherText, WeatherIcon, IsDayTime }] = await getWeatherData(Key);
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`;
 
    showCard()
    ShowCityWeatherInfo(LocalizedName, WeatherText, Temperature, timeIcon, IsDayTime)

    Cityform.reset();
})