import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'web-weather',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  constructor(private http:HttpClient){}
  city1:string="";
  data!:string;
  testRoom="this";
  locationData!:any;
  enter1(){
    this.data=this.city1;
    this.checkWeather(this.data);

  }
  checkWeather(loc:string){
      this.http.get('https://weatherapi-com.p.rapidapi.com/current.json?q='+loc,{
        headers:{
          'x-rapidapi-key': 'e33d1d444fmsh3994e3939ed7d1fp1d2baejsn2a48a7a96825',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      }).subscribe(data=>{
        this.locationData=data
        console.log(data);
          
      })
  }

}
export interface Root {
  location: Location
  current: Current
}

export interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface Current {
  last_updated_epoch: number
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: Condition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
}

export interface Condition {
  text: string
  icon: string
  code: number
}
