import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'le photovoltaÏQUE SFAXIEN';

  actions : Array<any> = [
    {title : "Home", route: "/home", icon : "house"},
    {title : "Panels", route: "/panels", icon : "arrow-down-up"},
    {title : "New Panel", route: "/newPanel", icon : "plus-circle"},
  ]

  currentAction:any;

  setCurrentAction(action: any) {
    this.currentAction = action;
    }
}
