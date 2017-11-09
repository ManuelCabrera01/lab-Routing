import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'about', component: MyAboutComponent }
];
export class AppModule { }
