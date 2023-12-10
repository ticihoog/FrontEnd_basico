document.addEventListener('DOMContentLoaded', function () {

    const noticiasContainer = document.querySelector('.noticias-int');
    fetchNewsData().then(newsData => displayNews(noticiasContainer, newsData));

    const previsaoTempoContainer = document.getElementById('previsao-tempo');
    fetchWeatherData().then(weatherData => displayWeather(previsaoTempoContainer, weatherData));
});

function fetchNewsData() {
    const apiUrl = 'ttps://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw';
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => [data]); 
}

// Função para exibir notícias no quadro "Notícias"
function displayNews(container, newsData) {
    container.innerHTML = '';
    newsData.forEach(news => {
        const newsElement = document.createElement('div');
        newsElement.className = 'noticias-int-int';
        newsElement.innerHTML = `
            <h4>${news.joke}</h4>
        `;
        container.appendChild(newsElement);
    });
}

function fetchWeatherData() {
    const apiKey = 'c2cd412b61c777ebed658243618bc7c6sua-chave-de-api';
    const cidade = 'Ilheus';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Ilheus}&appid=${c2cd412b61c777ebed658243618bc7c6}&units=metric`;
    
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => ({
            temperatura: data.main.temp,
            descricao: data.weather[0].description
        }));
}

// Função para exibir previsão do tempo no quadro "Serviços"
function displayWeather(container, weatherData) {
    container.innerHTML = `<p>Previsão do Tempo: ${weatherData.temperatura}°C, ${weatherData.descricao}</p>`;
}


