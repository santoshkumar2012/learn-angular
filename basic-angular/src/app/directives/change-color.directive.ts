import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true,
})
export class ChangeColorDirective {

  @Input() defaultColor: string = 'yellow'; // Default color
  @Input() highlightColor: string = 'red'; // Color on click
  
  private isHighlighted = false;

  constructor(private el: ElementRef) {}

    @HostListener('click') onClick() {
      this.isHighlighted = !this.isHighlighted;
      this.el.nativeElement.style.backgroundColor = this.isHighlighted ? this.highlightColor : this.defaultColor;
    }

}
