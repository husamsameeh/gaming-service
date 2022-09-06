import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {SnakeComponent} from "./snake/snake.component";
import {BoardComponent} from "./board/board.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
 path: 'snake', component: SnakeComponent
},
  {
    path: 'X-O', component: BoardComponent
  },
  {
    path: '' , component:HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

export const routingComponents = RouterModule.forRoot(routes);
