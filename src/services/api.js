const KEY = 'e7845f24c93c4e8492a140647232504'

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no&lang=pt`
    const fetchResponse = await fetch(url)
    const data = await fetchResponse.json()
    return data
}

export default fetchData
