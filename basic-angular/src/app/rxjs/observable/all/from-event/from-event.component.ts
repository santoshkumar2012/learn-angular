import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-from-event',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent implements AfterViewInit {

  @ViewChild('addBtn') addBtn!: ElementRef;
  @ViewChild('myButton') button!: ElementRef;


  constructor(){}

  ngOnInit(){}

  ngAfterViewInit(){
    // console.log('View Initialized', this.addBtn);
    let count = 1
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVel = 'video '+ count++
      console.log(countVel);
      this.print(countVel);
    })
  }

  print(val: string){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById('elcontainer')?.appendChild(el)
  }


  // fromEvent(this.button.nativeElement, 'click')
  //     .subscribe(() => {
  //       console.log('Button was clicked!');
  //     });

  // fromEvent(window, 'scroll').subscribe(() => {
  //   console.log('Scrolling...');
  // });

    

    

}
