import { Component } from '@angular/core';

interface Passengers{
  id:number;
  fullname:string;
  checkedIn:boolean;
}

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`

  <div class="app">
  <h1>Airlines Passanger</h1>
  <ul>
  <li *ngFor="let passenger of passengers; let i =index;">
  <span
  [className]="'status'"
  [ngClass]="{'checked-in' : passenger.checkedIn}"
  ></span>
  {{i}} {{passenger.fullname}}
  </li>
  </ul>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  passengers: Passengers[] = [
    {
      "id": 1,
      "fullname": "Aakash",
      "checkedIn": true,

    },
    {
      "id": 2,
      "fullname": "Rose",
      "checkedIn": false,
    },
    {
      "id": 3,
      "fullname": "sarang",
      "checkedIn": true,

    },
    {
      "id": 4,
      "fullname": "Louise",
      "checkedIn": true,
    },
    {
      "id": 5,
      "fullname": "Tina",
      "checkedIn": false,

    }
  ]
  title : string;
  constructor(){
    this.title = 'Airlines-App';
  }
}
