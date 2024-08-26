const options = {
    method: 'GET',
	headers: {
        'x-rapidapi-key': 'YOUR_API_KEY',
		'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
	}
};
async function getWeatherForecast() {
    const BaseUrl = 'https://the-weather-api.p.rapidapi.com/api/weather';
    let city = document.getElementById("inputCity").value;
    const url = `${BaseUrl}/${city}`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = result.data;
        document.getElementById("BGimg").src = result.data.bg_image
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
document.getElementById("btn").addEventListener('click', getWeatherForecast);