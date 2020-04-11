import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let newUrl = url;
  
    if (country) {
      newUrl = `${url}/countries/${country}`;
    }
  
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(newUrl);
  
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  };

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        
        const modifedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifedData
    } catch (e) {
        console.log(e)
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`)

        return countries.map((country) => country.name)
    } catch (e) {
        console.log(e)
    }
}