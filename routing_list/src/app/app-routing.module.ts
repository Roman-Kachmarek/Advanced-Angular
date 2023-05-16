import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { UserListComponent } from './pages/works/user-list/user-list.component';
import { TaskListComponent } from './pages/works/task-list/task-list.component';
import { ChildComponent } from './pages/works/task-list/child/child.component';

const routes: Routes = [
  { path:'home' , component: HomeComponent},
  {
    path: 'works',
    component: WorksComponent,
    children: [
      { path: 'cenzor', component: CenzorComponent },
      { path: 'userList', component: UserListComponent },
      { path: 'taskList', component: TaskListComponent, children:[{path:'child',component:ChildComponent}] },
    ]},
    { path: '', pathMatch: 'full', redirectTo: 'home' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
