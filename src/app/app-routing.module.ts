import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelsComponent } from './panels/panels.component';
import { NewPanelComponent } from './new-panel/new-panel.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

const routes: Routes = [
  {path : "Login", component : LoginComponent},
  {
    path : "admin", component : AdminTemplateComponent, canActivate:[AuthenticationGuard], children : [
      {path : "home", component : HomeComponent},
      {path : "panels", component : PanelsComponent},
      {path : "newPanel", component : NewPanelComponent, canActivate:[AuthorizationGuard],
        data:{requiredRoles: 'ADMIN'}
      },
      {path : "editProduct/:id", component : EditPanelComponent , canActivate:[AuthorizationGuard],
        data:{requiredRoles: 'ADMIN'}
      },
      {path : "notAuthorized", component : NotAuthorizedComponent},
    ]
  },
  {path : "", redirectTo: "Login", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
