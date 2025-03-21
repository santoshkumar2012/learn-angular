import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  letters: any
  genders: any

  constructor(
    private _common : CommonServiceService
  ){
    this.genders = this._common.genders
    console.log('Check--->', "crud");    
  }

  ngOnInit(){ }

}
