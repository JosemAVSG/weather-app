import { ajax } from "./ajax";




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
        'X-RapidAPI-Key': 'e6b12d90fdmsh76bc1eadf7e8666p1a4cefjsn7c54d0bbf19d',
        'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    },
   
  };
  return await ajax(optionsRequest);
};
