import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpSharedService } from '../../http-shared.service';
import { response } from 'express';

@Component({
  selector: 'app-childs',
  imports: [CommonModule],
  templateUrl: './childs.component.html',
  styleUrl: './childs.component.css'
})
export class ChildsComponent {

  // @Input() message: string = ''; // receives data from parent

  @Input() users: any[] = [];

   @Output() dataFetched = new EventEmitter<any[]>();

   constructor( private http: HttpSharedService){}

  ngOnInit(){
    this.getDataFetch()
  }

  getDataFetch(){
    this.http.get('users').subscribe((data: any) => {
      this.dataFetched.emit(data.users);
    })
  }

}
