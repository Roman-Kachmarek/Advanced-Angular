import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { SearchPipe } from './lesson04/search.pipe';
import { FormsModule } from '@angular/forms';
import { FnamePipe } from './lesson04/fname.pipe';
import { SnamePipe } from './lesson04/sname.pipe';
import { PhoneNumberPipe } from './lesson04/phone-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Lesson04Component,
    SearchPipe,
    FnamePipe,
    SnamePipe,
    PhoneNumberPipe,
   
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
