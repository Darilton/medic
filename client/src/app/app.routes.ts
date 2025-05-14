import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'about', component: AboutComponent},
    {path: '',   redirectTo: '/home', pathMatch: 'full'}
];
