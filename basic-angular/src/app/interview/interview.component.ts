import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpSharedService } from '../http-shared.service';

@Component({
  selector: 'app-interview',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.css'
})
export class InterviewComponent {
  
  users: any
  user_form!: FormGroup
  
  constructor(private fb: FormBuilder, private http: HttpSharedService){}

  ngOnInit(){
    this.getUser()
  }

  getUser(){
    this.http.get('posts').subscribe((response: any) => {
      this.users = response.users
      console.log(response)
    })
  }



}
