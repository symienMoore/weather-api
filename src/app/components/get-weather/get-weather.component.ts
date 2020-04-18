import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from "../../services/weather-service.service";

@Component({
  selector: 'app-get-weather',
  templateUrl: './get-weather.component.html',
  styleUrls: ['./get-weather.component.css']
})
export class GetWeatherComponent implements OnInit {
  
  zipcode: any;
  temp: any;

  constructor(private service: WeatherServiceService) {
    
   }

  ngOnInit() {
  }

  getWeather() {
    this.service.getAPIWeather(this.zipcode).subscribe((res) => {
      this.temp = res;
      var tempValue = (this.temp['main']['temp']) = (Math.floor(this.temp['main']['temp']) - 273) + " ° Celsius"
      console.log(tempValue)
      console.log(this.temp) 
    })
  }


}
