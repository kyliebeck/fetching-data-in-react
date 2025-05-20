// src/services/weatherService.js

const API_KEY = 'bf2305e0131340968a5223759252005';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;




const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        console.log('Data:', data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

export { show };