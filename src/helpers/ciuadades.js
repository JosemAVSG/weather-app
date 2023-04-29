import { ajax } from "./ajax";
const apiKey = process.env.REACT_APP_APIKEY_RAPIDAPI;




export const getCities = async (country) => {
  
  const optionsRequest = {
    Method: "GET",
    url: `https://spott.p.rapidapi.com/places/`,

     params: {
      limit: 100,
      type: "CITY",
      country: `${country}`,
    },
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    },
   
  };
  return await ajax(optionsRequest);
};
