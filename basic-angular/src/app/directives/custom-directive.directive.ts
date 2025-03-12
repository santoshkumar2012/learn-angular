import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[webSanto]',
  standalone: true,
})
export class CustomDirectiveDirective implements OnInit {

  @Input() color!:string;


  // @Input() defaultColor: string = 'yellow'; // Default color
  // @Input() highlightColor: string = 'red'; // Color on click
  // private isHighlighted = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // console.log('webSanto directive applied!', this.el.nativeElement); // Debugging log
    // this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.backgroundColor = this.color;
    //this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }

  // @HostListener('click') onClick() {
  //   this.isHighlighted = !this.isHighlighted; // Toggle color state
  //   this.el.nativeElement.style.backgroundColor = this.isHighlighted ? this.highlightColor : this.defaultColor;
  // }

}
