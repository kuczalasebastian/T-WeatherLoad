const citySelect = document.getElementById('city');
const temperatureSpan = document.getElementById('temperature');


async function getWeather(city) {
  const apiKey = 'a48ebb02d984830ced1a889260d4cbd9';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const temperature = data.main.temp;
    temperatureSpan.innerText = temperature.toFixed(1);
  } catch (error) {
    console.error(error);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  getWeather('Katowice');
});


citySelect.addEventListener('change', async () => {
  const city = citySelect.value;
  getWeather(city);
});
