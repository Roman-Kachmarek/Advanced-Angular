import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { UserListComponent } from './pages/works/user-list/user-list.component';
import { TaskListComponent } from './pages/works/task-list/task-list.component';
import { WorksComponent } from './pages/works/works.component';
import { ChildComponent } from './pages/works/task-list/child/child.component';


@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CenzorComponent,
    UserListComponent,
    TaskListComponent,
    WorksComponent,
    ChildComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
