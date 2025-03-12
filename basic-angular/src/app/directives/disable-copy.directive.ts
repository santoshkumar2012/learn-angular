import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableCopy]',
  standalone: true,
})
export class DisableCopyDirective {

  constructor() { }

  @HostListener('document:copy')
    oncopy(event:ClipboardEvent){
      event.preventDefault();
    }
}
