import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent {

  isTouching:any;
  x:number;
  y:number;

  constructor() {

      this.x = Math.floor(Math.random() * 289 / 5) * 5;
      this.y = Math.floor(Math.random() * 140 /5 ) * 5;

  }


}
