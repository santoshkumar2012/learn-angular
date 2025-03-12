import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]',
  standalone: true,
})
export class ScrollToTopDirective {

  private showClass = 'show-scroll-button';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'scroll-to-top');
  }

  @HostListener('window:scroll', [])

  onWindowScroll(){
    if(window.scrollY > 200){
      this.renderer.addClass(this.el.nativeElement, this.showClass);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.showClass);
    }
  }

  @HostListener('click') onclick(){
    window.scrollTo({ top:0, behavior: 'smooth'});
  }

}
