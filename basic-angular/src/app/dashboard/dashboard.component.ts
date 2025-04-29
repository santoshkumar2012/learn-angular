import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { link } from 'fs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  loading: boolean = false

  constructor(
    private router: Router
  ){

  }

ngOnInit() {}

 components = [
    { name: 'crud', link: '/crud'},
    { name: 'pipe', link: '/pipe' },
    { name: '*ngIf', link: '/ngif' },
    { name: '*ngFor', link: '/ngfor' },
    { name: '*ngSwitch', link: '/ngswitch' },
    { name: 'directive', link: '/directive' },
    { name: 'rxjs', link: '/rxjs' },
    { name: 'pagination', link: '/pagination' },
    { name: 'lifecycle hook', link: '/lifecyclehook' },
    { name: 'structural directive', link: '/structural-directive' },
    { name: 'promise', link: '/promise' },
    { name: 'binding', link: '/binding' },
    { name: 'subject', link: '/subject' },
    { name: 'users', link: '/users' },
    { name: 'user form', link: '/user-form' },
 ]

 logout(){
  localStorage.clear()
  sessionStorage.clear()
  this.router.navigateByUrl('')
}
  
}
