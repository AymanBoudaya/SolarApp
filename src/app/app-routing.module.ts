import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelsComponent } from './panels/panels.component';
import { NewPanelComponent } from './new-panel/new-panel.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "panels", component : PanelsComponent},
  {path : "newPanel", component : NewPanelComponent},
  {path : "editProduct/:id", component : EditPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
