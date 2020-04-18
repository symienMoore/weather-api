import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  API_URL='https://api.openweathermap.org/data/2.5/weather?zip=';
  API_KEY='ce2e9ddc532881b3ea93c052f7516d82';
  

  constructor(private http: HttpClient) { }


  getAPIWeather(zipcode) {
    return this.http.get(this.API_URL + zipcode + ',us&appid=' + this.API_KEY)
  }



}
