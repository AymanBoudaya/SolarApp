import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'le photovoltaÏQUE SFAXIEN';

  actions : Array<any> = [
    {title : "Home", route: "/admin/home", icon : "house"},
    {title : "Panels", route: "/admin//panels", icon : "arrow-down-up"},
    {title : "New Panel", route: "/admin/newPanel", icon : "plus-circle"},
  ]

  currentAction:any;
  public isLoading : boolean = false;

  constructor(public appState : AppStateService, public loadingService : LoadingService){
    this.loadingService.isLoading$.subscribe({
      next : (value) => {
        this.isLoading = value;
      }
    })
  }


  setCurrentAction(action: any) {
    this.currentAction = action;
  }

}
