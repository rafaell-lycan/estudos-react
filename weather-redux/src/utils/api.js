import axios from 'axios';

let API_KEY = "d94bcd435b62a031771c35633f9f310a"
let apiUrl = "http://api.openweathermap.org/data/2.5/"

let fetchData = function(city) {
  let weeklyWeatherUrl = `${apiUrl}/forecast/daily?q=${city}&units=metric&cnt=4&appid=${API_KEY}`;

  return axios.get(weeklyWeatherUrl).then((res) => res.data);
};

export { fetchData };