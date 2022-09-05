import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tictac',
  templateUrl: './tictac.component.html',
  styleUrls: ['./tictac.component.css']
})
export class TictacComponent {
  @Input() value: 'X' | 'O' | undefined;

}
