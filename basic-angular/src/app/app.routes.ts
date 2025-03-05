import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'crud', component: CrudComponent}
];
