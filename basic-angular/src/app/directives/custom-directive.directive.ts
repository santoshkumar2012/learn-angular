import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[webSanto]',
  standalone: true,
})
export class CustomDirectiveDirective implements OnInit {

  @Input() color!:string;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    //console.log('webSanto directive applied!', this.el.nativeElement); // Debugging log
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.backgroundColor = this.color;
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }

}
