import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { AddMarkComponent } from './components/create-mark/addMark.component';
import { AddClassComponent } from './components/create-class/addClass.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found';
import { ClassListComponent } from './components/class-list';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'addMark', component: AddMarkComponent },
  { path: 'addClass', component: AddClassComponent },
  { path: 'classes', component: ClassListComponent },
  { path: 'users', component: UsersComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }// redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
