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

  constructor(){}

  ngOnInit(){}

  ngAfterViewInit(){
    console.log('View Initialized', this.addBtn);

    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      console.log('Button clicked!', res);
    })
  }

}
