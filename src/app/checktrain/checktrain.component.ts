import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'web-checktrain',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './checktrain.component.html',
  styleUrl: './checktrain.component.css',
  host:{ngSkipHydration:'true'}
})
export class ChecktrainComponent implements OnInit {
  name1:string="Incep";
  das!:any;
  var1:number=0;
  type1:string="Webseries";
  constructor(private http:HttpClient){

  }
  tog1(){
    if(this.type1==="Webseries")this.type1="Movies";
    else this.type1="Webseries";
  }
  siz(k1:string){
    if(k1==='-') this.var1--;
    else this.var1++;

    console.log(k1);
    console.log(this.var1);
  }
  ngOnInit(): void {
      
  }
  // temp(){}
  // temp(){
  //   this.http.post("https://trains.p.rapidapi.com/v1/railways/trains/india",{
  //     headers: {
  //       'x-rapidapi-key': 'e33d1d444fmsh3994e3939ed7d1fp1d2baejsn2a48a7a96825',
  //       'x-rapidapi-host': 'trains.p.rapidapi.com',
  //       'Content-Type': 'application/json'
  //     },
  //     body:{
  //       search:'Rajdhani'
  //     }
  //   }).subscribe((data)=>{
  //     console.log(data);
  //     this.das=data;
  //   })
  // }
 temp(){
    this.http.request('GET',"https://moviedatabase8.p.rapidapi.com/Search/"+this.name1,{headers: {
      'x-rapidapi-key': 'e33d1d444fmsh3994e3939ed7d1fp1d2baejsn2a48a7a96825',
      'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
    }}).subscribe(data=>{
      console.log(data);
      this.das=data;
    })
  }
}
