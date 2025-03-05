import { Component } from '@angular/core';
import { HttpSharedService } from '../http-shared.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  letters: any

  constructor(private _http : HttpSharedService){}

  ngOnInit(){ this.getLetters() }

  getLetters(){
    this._http.get('letters').subscribe((response: any) => {
      this.letters = response;
    })
  }

}
