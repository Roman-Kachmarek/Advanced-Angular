import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './lesson03/child/child.component';
import { Lesson03Component } from './lesson03/lesson03.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Lesson03Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
