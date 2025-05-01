import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { link } from 'fs';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, HeaderComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
    private router: Router
    ){}
  
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

 isDisabled = true
 placeholder1 = "Santosh"

 visiable = !false

 showContent(){
  this.visiable = !this.visiable
 }

 data = ''


 clickEvent2(){
  console.log('Check--->');
 }

 eventBind( val:string){
  console.log(val);
 }
  
}
