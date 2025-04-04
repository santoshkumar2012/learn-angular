import { ChildActivationEnd, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { PipeComponent } from './pipe/pipe.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgifComponent } from './directives/ngif/ngif.component';
import { NgswitchComponent } from './directives/ngswitch/ngswitch.component';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { DirectivesComponent } from './directives/directives.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { StructuralDirectiveComponent } from './directives/structural-directive/structural-directive.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'crud', component: CrudComponent},
    {path: 'pipe', component: PipeComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'child', component: ChildComponent},
    {path: 'ngif', component: NgifComponent},
    {path: 'ngfor', component: NgforComponent},
    {path: 'ngswithch', component: NgswitchComponent},
    {path: 'directive', component: DirectivesComponent},
    {path: 'rxjs', component: RxjsComponent},
    {path: 'pagination', component: PaginationComponent},
    {path: 'lifecyclehook', component:LifecyclehookComponent},
    {path: 'structural-directive', component:StructuralDirectiveComponent}
];
