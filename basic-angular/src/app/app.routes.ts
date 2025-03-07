import { ChildActivationEnd, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { PipeComponent } from './pipe/pipe.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'crud', component: CrudComponent},
    {path: 'pipe', component: PipeComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'child', component: ChildComponent}
];
