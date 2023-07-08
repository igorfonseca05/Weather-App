const APIkey = 'hZ5zBMA1CY6BquAqUg6r6jfcWR74kpAR'; 

const getCityUrl = (cityName) => {
    return `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`
} 

const getWeatherConditions = (key) => {
    return `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIkey}&language=pt-br`
}

const requests = async (url) => {
    try{
        const response = await fetch(url)

        if(!response.ok) {
            console.log('Não foi possível obter os dados da API')
        }
        
       return await response.json()

    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = async (cityName) => { 
    const cityUrl = getCityUrl(cityName)
    const [cityData] = await requests(cityUrl)
    return cityData
}


const getWeatherData = async (Key) => { 
    const cityConditionsUrl = getWeatherConditions(Key)
    return await requests(cityConditionsUrl)    
}



