import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Directive({
  selector: '[appHighlightCountry]',
})
export class HighlightCountryDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    // Delay to allow options to render if needed
    setTimeout(() => {
      const options = this.el.nativeElement.options;
      for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.text.trim().toLowerCase() === 'india') {
          this.renderer.setStyle(option, 'color', 'red');
          this.renderer.setStyle(option, 'textDecoration', 'underline');
        }
      }
    });
  }

}
