const KEY = 'https://api.weatherapi.com'

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no&lang=pt`
    const fetchResponse = await fetch(url)
    const data = await fetchResponse.json()
    return data
}

export default fetchData
