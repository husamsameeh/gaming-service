import { Component, OnInit } from '@angular/core';
import {BodyComponent} from "../body/body.component";
import {FoodComponent} from "../food/food.component";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  timeout:any;
  canvas:any;
  canvasContext:any;

  snake: BodyComponent;
  food: FoodComponent;
  score: number;

  constructor() {
  this.snake = new BodyComponent();
  this.food = new FoodComponent();
  this.score = 0;
  }

  ngOnInit(): void {
    this.startGame();
  }
  startGame(){
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.canvasContext = this.canvas.getContext('2d');
    //setInterval(this.show , 1000/15);
    this.show();
  }

  show(){
    this.timeout = setTimeout(this.show.bind(this),1000/15);

    this.canvasContext.clearRect(0,0,this.canvas.width, this.canvas.height);
    this.update();
    this.draw();
  }

   public update(){

    this.snake.move();

    window.addEventListener("keydown", (event)=>{
      setTimeout(()=>{
        if (event.keyCode == 37 && this.snake.speedX != 1){
          this.snake.speedX = -1;
          this.snake.speedY = 0;
        } else if (event.keyCode == 38 && this.snake.speedY != 1){
          this.snake.speedX = 0;
          this.snake.speedY = -1;
        } else if (event.keyCode == 39 && this.snake.speedX != -1){
          this.snake.speedX = 1;
          this.snake.speedY = 0;
        }else if (event.keyCode == 40 && this.snake.speedY != -1){
          this.snake.speedX = 0;
          this.snake.speedY = 1;
        }
      })
    })
    if (!this.eatFood()){
      this.checkHitSelf();
    }

    this.checkHitWall();


  }
  checkHitSelf(){
    let head = this.snake.tail[this.snake.tail.length-1];
    console.log("---------------------------------")
    for (let i = 0 ; i < this.snake.tail.length - 1 ; i++)
    {
      console.log(head.x , head.y , this.snake.tail[i].x , this.snake.tail[i].y)
      if(head.x == this.snake.tail[i].x && head.y == this.snake.tail[i].y)
      {
        console.log("i am here");
        clearTimeout(this.timeout);
      }
    }
  }
  checkHitWall(){
    let head = this.snake.tail[this.snake.tail.length-1];
    if(head.x == - this.snake.size)
    {
      head.x = this.canvas.width - this.snake.size;
    }else if(head.x == this.canvas.width){
      head.x = 0;
    }else if(head.y == - this.snake.size){
      head.y = this.canvas.height - this.snake.size;
    }else if(head.y == this.canvas.height)
    {
      head.y = 0;
    }
  }

  eatFood(){
    if(this.snake.tail[this.snake.tail.length - 1].x == this.food.x &&
      this.snake.tail[this.snake.tail.length - 1].y == this.food.y){
      this.snake.tail[this.snake.tail.length] = {x:this.food.x  , y:this.food.y};
      this.score = this.score + 1;
      this.food = new FoodComponent();
      return true;
    }
    return false;
  }

  draw(){

    this.createRect(this.food.x, this.food.y , 5 , 5, 'red');

    for (let i = 0 ; i < this.snake.tail.length ; i++) {

      this.createRect(this.snake.tail[i].x,
        this.snake.tail[i].y,
        this.snake.size,
        this.snake.size, 'green');
    }

    this.canvasContext.font = '20px Arial'
    this.canvasContext.fillStyle = "#00FF42";
  }

  createRect(x:number,y:number,width:number,height:number,color:any){

    this.canvasContext.fillStyle = color;

    this.canvasContext.fillRect(x,y,width,height);



  }

}

