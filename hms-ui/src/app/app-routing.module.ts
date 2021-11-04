import { AuthGuard } from './common-services/auth.guard';
import { LoginComponent } from './modules/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DefaultComponent, children:[
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path:'posts',component: PostsComponent, canActivate: [AuthGuard]}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
