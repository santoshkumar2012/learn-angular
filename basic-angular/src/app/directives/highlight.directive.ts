import { Directive, ElementRef, Input, HostListener, Renderer2, } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = 'yellow'
  @Input() highlightColor: string = 'red'

  @Input() appHighlight = 'yellow'; // default

  isHightedColor = true

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClic(){
        this.isHightedColor = !this.isHightedColor;
        this.el.nativeElement.style.backgroundColor = this.isHightedColor ? this.highlightColor : this.defaultColor
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight);
  }

  
  

}
