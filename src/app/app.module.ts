import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SnakeComponent } from './snake/snake.component';
import { TictacComponent } from './tictac/tictac.component';
import { FifteenComponent } from './fifteen/fifteen.component';
import { BoardComponent } from './board/board.component';
import { ScreenComponent } from './snake/screen/screen.component';
import { BodyComponent } from './snake/body/body.component';
import { FoodComponent } from './snake/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnakeComponent,
    TictacComponent,
    FifteenComponent,
    BoardComponent,
    ScreenComponent,
    BodyComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
