import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  pages: any

  constructor( private http: HttpClient ){}

  ngOnInit(){
    this.getPages()
  }

  getPages(){
  this.http.get('https://api.memelli.com/cms').subscribe((response: any) => {
    this.pages = response;
    console.log('Check--->', this.pages);
  })
 }

}
