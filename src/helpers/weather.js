import { ajax } from "./ajax";


export const getWeather = async (citie) => {

  
  const optionsRequest = {
    Method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather`,
     params: {
      q : `${citie}`,
      appid: '0f59b3bc36384d5cb33c72f77a9bbcbc',
      units: "metric"
    },
   
   
  };
  return await ajax(optionsRequest);
};
