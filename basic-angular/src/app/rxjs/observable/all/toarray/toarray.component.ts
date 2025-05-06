import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { interval, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  imports: [HeaderComponent],
  templateUrl: './toarray.component.html',
  styleUrl: './toarray.component.css'
})
export class ToarrayComponent {

  constructor(){}

  sourceSub!: Subscription;

  ngOnInit(){
    const source = interval(1000)

    this.sourceSub = source.pipe(
      take(5),
      toArray()
    )
    .subscribe(res => {
      console.log(res);

      // if(res >= 8 ){
      //   this.sourceSub.unsubscribe()
      // }

    })

  }

}
