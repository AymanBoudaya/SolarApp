import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelsComponent } from './panels/panels.component';
import { NewPanelComponent } from './new-panel/new-panel.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppErrorsComponent } from './app-errors/app-errors.component';
import { AppHttpInterceptor } from './services/app-http.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent,
    NewPanelComponent,
    HomeComponent,
    EditPanelComponent,
    DashboardComponent,
    NavbarComponent,
    AppErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : AppHttpInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
