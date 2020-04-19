import axios from "axios";
const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

    let chnageURl = URL;
    if(country){
        chnageURl = `https://covid19.mathdro.id/api/countries/${country}`
    }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(chnageURl);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`https://covid19.mathdro.id/api/daily`);
    const modifiedData = data.map((d) => {
      return {
        confirmed: d.confirmed.total,
        deadths: d.deaths.total,
        date: d.reportDate,
      };
    });

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};


export const getCountries = async ()=>{
    try{
       const {data:{countries}} = await axios.get(`https://covid19.mathdro.id/api/countries`);
       return countries.map((c)=> c.name);
    }catch(err){
        console.log(err);
    }
}