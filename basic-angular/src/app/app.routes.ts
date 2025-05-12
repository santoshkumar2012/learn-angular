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
import { PromiseComponent } from './rxjs/promise/promise.component';
import { LoaderComponent } from './loader/loader.component';
import { BindingComponent } from './binding/binding.component';
import { SubjectComponent } from './rxjs/subject/subject.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { SimpleCrudComponent } from './simple-crud/simple-crud.component';
import { DynamicCrudComponent } from './dynamic-crud/dynamic-crud.component';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { CrudLsComponent } from './crud/crud-ls/crud-ls.component';
import { CrudApiComponent } from './crud/crud-api/crud-api.component';
import { CrudLgPractiseComponent } from './crud/crud-lg-practise/crud-lg-practise.component';
import { ObservableComponent } from './rxjs/observable/observable.component';
import { AllComponent } from './rxjs/observable/all/all.component';
import { FromEventComponent } from './rxjs/observable/all/from-event/from-event.component';
import { IntervalComponent } from './rxjs/observable/all/interval/interval.component';
import { OfFromComponent } from './rxjs/observable/all/of-from/of-from.component';
import { ToarrayComponent } from './rxjs/observable/all/toarray/toarray.component';
import { MapComponent } from './rxjs/observable/all/map/map.component';
import { PluckComponent } from './rxjs/observable/all/pluck/pluck.component';
import { CrudApiPractiseComponent } from './crud/crud-api-practise/crud-api-practise.component';
import { CrudLocalstorageComponent } from './crud/crud-localstorage/crud-localstorage.component';
import { MergemapComponent } from './rxjs/observable/all/mergemap/mergemap.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'crud', component: CrudComponent, canActivate:[authGuard]},
    {path: 'pipe', component: PipeComponent, canActivate:[authGuard]},
    {path: 'parent', component: ParentComponent, canActivate:[authGuard]},
    {path: 'child', component: ChildComponent, canActivate:[authGuard]},
    {path: 'ngif', component: NgifComponent, canActivate:[authGuard]},
    {path: 'ngfor', component: NgforComponent, canActivate:[authGuard]},
    {path: 'ngswithch', component: NgswitchComponent, canActivate:[authGuard]},
    {path: 'directive', component: DirectivesComponent, canActivate:[authGuard]},
    {path: 'rxjs', component: RxjsComponent, canActivate:[authGuard]},
    {path: 'pagination', component: PaginationComponent, canActivate:[authGuard]},
    {path: 'lifecyclehook', component:LifecyclehookComponent, canActivate:[authGuard]},
    {path: 'structural-directive', component:StructuralDirectiveComponent, canActivate:[authGuard]},
    {path: 'promise', component:PromiseComponent, canActivate:[authGuard]},
    {path: 'loader', component:LoaderComponent, canActivate:[authGuard]},
    {path: 'binding', component:BindingComponent, canActivate:[authGuard]},
    {path: 'subject', component:SubjectComponent, canActivate:[authGuard]},
    {path: 'users', component:UsersComponent, canActivate:[authGuard]},
    {path: 'user-form', component:UserFormComponent, canActivate:[authGuard]},
    {path: 'dashboard', component:DashboardComponent, canActivate:[authGuard]},
    {path: 'employee', component:EmployeeComponent, canActivate:[authGuard]},
    {path: 'simple-crud', component:SimpleCrudComponent, canActivate:[authGuard]},
    {path: 'dynamic-crud', component:DynamicCrudComponent, canActivate:[authGuard]},
    {path: 'emp-data', component:EmpDataComponent, canActivate:[authGuard]},
    {path: 'crud-ls', component:CrudLsComponent, canActivate:[authGuard]},
    {path: 'crud-api', component:CrudApiComponent, canActivate:[authGuard]},
    {path: 'crud-practise', component:CrudLgPractiseComponent, canActivate:[authGuard]},
    {path: 'observable', component:ObservableComponent, canActivate:[authGuard]},
    {path: 'all', component:AllComponent, canActivate:[authGuard]},
    {path: 'from-event', component:FromEventComponent, canActivate:[authGuard]},
    {path: 'interval', component:IntervalComponent, canActivate:[authGuard]},
    {path: 'off-from', component:OfFromComponent, canActivate:[authGuard]},
    {path: 'toarray', component:ToarrayComponent, canActivate:[authGuard]},
    {path: 'map', component:MapComponent, canActivate:[authGuard]},
    {path: 'pluck', component:PluckComponent, canActivate:[authGuard]},
    {path: 'crudapi-practise', component:CrudApiPractiseComponent, canActivate:[authGuard]},
    {path: 'crud-localstorage', component:CrudLocalstorageComponent, canActivate:[authGuard]},
    {path: 'mergemap', component:MergemapComponent, canActivate:[authGuard]},
];
