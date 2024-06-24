import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'web-pnr',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './pnr.component.html',
  styleUrl: './pnr.component.css'
})
export class PnrComponent {
  pnrData:number1={pnr:'SLO'};
  temp:any;
  constructor(private http:HttpClient){

  }
  checkPnr(){
    this.http.get("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live",{
      headers:{
   'x-rapidapi-key': 'e33d1d444fmsh3994e3939ed7d1fp1d2baejsn2a48a7a96825',
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    }).subscribe(data=>{
      console.log(data);
      this.temp=data;
    })
  }
}
export interface number1{
  pnr:string
}
