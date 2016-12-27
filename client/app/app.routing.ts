import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { ProfileComponent} from './components/student-profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { AddMarkComponent } from './components/add-mark/add-mark.component';
import { AddClassComponent } from './components/create-class/create-class.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found';
import { ClassListComponent } from './components/class-list';
import { AuthGuard } from './services/auth-guard.service';
import { TeacherGuard } from './services/teacher-guard.service';
import { CreateTeacherComponent } from './components/create-teacher/create-teacher.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'addMark', component: AddMarkComponent },
  { path: 'addClass', component: AddClassComponent },
  { path: 'classes', component: ClassListComponent,  canActivate: [TeacherGuard] },
  { path: 'addTeacher', component: CreateTeacherComponent,  canActivate: [TeacherGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }// redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

