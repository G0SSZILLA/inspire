import WeatherController from "./controllers/WeatherController.js";
import TodoController from "./controllers/TodoController.js";
import QuoteController from "./controllers/QuoteController.js";
import ImageController from "./controllers/ImageController.js";

//TODO Dont forget to register all your controllers
class App {
    constructor() {
        this.weatherController = new WeatherController();
        this.todoController = new TodoController();
        this.quoteController = new QuoteController()
        this.imageController = new ImageController
    }
}

window["app"] = new App();