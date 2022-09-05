import { Component, OnInit } from '@angular/core';
import {colors} from "@angular/cli/utilities/color";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  xIsNext: boolean;
  winner: string | null;

  constructor() {
    this.xIsNext = true;
    this.winner = '';
  }

  ngOnInit(): void {
    this.newGame();
  }


  newGame(){
    this.xIsNext = true;
    this.winner = '';

    let elements = Array.from(document.getElementsByClassName("square")) as unknown as HTMLCollectionOf<HTMLElement>;
    for (let i = 0 ; i < elements.length ; i++)
    {
      elements[i].removeAttribute("disabled");
      elements[i].style.backgroundColor = "#455EB5";
      elements[i].innerHTML = '';
    }

    Array.from(elements).forEach((el)=>{
      el.removeAttribute("disabled");
    })

  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }


  makeMove(idx: number){

    let elements = Array.from(document.getElementsByClassName("square")) as unknown as HTMLCollectionOf<HTMLElement>;
    console.log(idx);

    if(this.player == 'X') {
      elements[idx].style.backgroundColor = "#197f5a";
    }
    else {
      elements[idx].style.backgroundColor = "#26abff";
    }
    elements[idx].innerHTML = this.player;
    elements[idx].setAttribute("disabled","true");

    this.xIsNext = !this.xIsNext;
    this.winner = this.calculateWinner();

    if(this.winner != null)
    {
      this.endGame();
    }
  }

  endGame(){
    // @ts-ignore
    console.log("i am here");
    let elements = Array.from(document.getElementsByClassName("square")) as unknown as HTMLCollectionOf<HTMLButtonElement>;
    for (let i = 0 ; i < elements.length ; i++)
    {
      elements[i].setAttribute("disabled","true");
    }

  }

  calculateWinner(){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    let elements = Array.from(document.getElementsByClassName("square")) as unknown as HTMLCollectionOf<HTMLElement>;

    for(let i = 0 ; i < lines.length ; i++)
    {

      const [a,b,c] = lines[i];
      if(
        elements[a].innerHTML &&
        elements[a].innerHTML == elements[b].innerHTML &&
        elements[a].innerHTML == elements[c].innerHTML
      ){
        return elements[a].innerHTML;
      }

    }
    return null;
  }

}
