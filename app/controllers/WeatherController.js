import WeatherService from "../services/WeatherService.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
    document.getElementById('weather').innerHTML = store.State.weather.Template
    console.log("THE WEATHER MAN SAYS:", store.State.weather);
}
export default class WeatherController {
    constructor() {
        store.subscribe("weather", drawWeather);
        WeatherService.getWeather();
    }
}