import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  x : number;
  y : number;
  speedX : number;
  speedY : number;
  size : number;
  tail: any;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.speedX = 1;
    this.speedY = 0;
    this.size = 5;
    this.tail=  [{x:this.x , y:this.y}]
  }

  move(){

    var newRect;

    if(this.speedX == 1)
    {
      newRect = {
        x: this.tail[this.tail.length - 1].x + this.size,
        y: this.tail[this.tail.length - 1].y
      }
    }
    else if (this.speedX == -1)
    {
      newRect = {
        x: this.tail[this.tail.length - 1].x - this.size,
        y: this.tail[this.tail.length - 1].y
      }
    }
    else if (this.speedY == 1)
    {
      newRect = {
        x: this.tail[this.tail.length - 1].x ,
        y: this.tail[this.tail.length - 1].y + this.size
      }
    }
    else if (this.speedY == -1)
    {
      newRect = {
        x: this.tail[this.tail.length - 1].x ,
        y: this.tail[this.tail.length - 1].y - this.size
      }
    }

    this.tail.shift();
    this.tail.push(newRect);
  }

}
