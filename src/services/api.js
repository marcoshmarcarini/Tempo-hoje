const KEY = 'c9d7fec365d645ffa5a131003220306'

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no&lang=pt`
    const fetchResponse = await fetch(url)
    const data = await fetchResponse.json()
    return data
}

export default fetchData