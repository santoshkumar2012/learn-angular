import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../header/header.component';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  imports: [HeaderComponent],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css'
})
export class OfFromComponent {

  //OF EXAMMPLES

  ngOnInit(){
    
    const Obs1 = of('Anup', 'Shekhar', 'Sharma')
    Obs1.subscribe(res => {
      console.log(res)
    })

    //From - Array

    const Obs3 = from(['Anup', 'Shekhar', 'Sharma']);
    Obs3.subscribe(res => {
      console.log(res)
    })

  }


}
