import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { from, pluck, toArray } from 'rxjs';
import { title } from 'process';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pluck',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.css'
})
export class PluckComponent {

  constructor(){}

  users = [
    { 
      name: 'Anup',
      skills: 'Angular',
      job:{
        title: 'Fronted Developer',
        exp: '10 Years'
      }
    },
    { 
      name: 'John',
      skills: 'Html, css',
      job:{
        title: 'HTML Developer',
        exp: '10 Years'
      }
    },
    { 
      name: 'Alex',
      skills: 'Vuejs',
      job:{
        title: 'Javascript Developer',
        exp: '10 Years'
      }
    },
    { 
      name: 'Alxendar',
      skills: 'JavaScript',
      job:{
        title: 'PHP Developer',
        exp: '10 Years'
      }
    },
  ]

  data:any

  ngOnInit(){
   
  from(this.users).pipe(
    pluck('job','title'),
    toArray()
  )
  .subscribe(res => {
    console.log(res);
    this.data = res
  })
    
  }

}
