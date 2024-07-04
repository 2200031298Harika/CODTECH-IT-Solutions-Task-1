async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '022801da3f945ecbfdcefe7e7711a518'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    if (data.cod === 200) {
        const { name, main, weather } = data;
        weatherDiv.innerHTML = `
            <h2>${name}</h2>
            <p>${weather[0].description}</p>
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
        `;
    } else {
        weatherDiv.innerHTML = `<p>City not found. Please try again.</p>`;
    }
}
