import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/footer/signup/signup.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '',   redirectTo: '/home', pathMatch: 'full'}
];
