export default class Weather {
    constructor(data) {
        console.log('[RAW WEATHER API DATA]', data);
        //NOTE Have you ever wanted to know the temperature measured in kelvin? 
        //      That is what this data returns! data.main.temp is the temperature in Kelvin


        //TODO You should probably convert the temperature data to either F or C
        //      check out the other data that comes back and see if there is anything you want to try

        this.city = data.name
        this.kelvin = data.main.temp
        this.temp = this.getTemp(data.main.temp)
    }

    get Template() {
        return /*html*/ `
         <!-- Card -->
         <div class="card weather-card bg-transparent text-black border-0 ">
         <!-- Card content -->
         <div class="card-body pb-3 ">
             <!-- Title -->
             <h4 class="card-title font-weight-bold ">${this.city}</h4>
             <!-- Text -->
             <p class="card-text">Mon, 12:30 PM, Mostly Sunny</p>
             <div class="d-flex justify-content-between">
                 <p class="display-1 degree ">${this.temp}</p>
                 <i class="fas fa-sun-o fa-5x pt-3 amber-text"></i>
             </div>
</div>
         </div>

     
     <!-- Card -->
      
      
      `
    }

    getTemp(temp) {
        return Math.floor((temp - 273.15) * 9 / 5 + 32)

    }

}