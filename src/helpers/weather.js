import { ajax } from "./ajax";
const apiKey = process.env.REACT_APP_APIKEY_WEATHER;
export const getWeather = async (citie) => {

  
  const optionsRequest = {
    Method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather`,
     params: {
      q : `${citie}`,
      appid: apiKey,
      units: "metric"
    },
   
   
  };
  return await ajax(optionsRequest);
};
