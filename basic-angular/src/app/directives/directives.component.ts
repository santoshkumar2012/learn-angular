import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ChangeColorDirective } from './change-color.directive';
import { ScrollToTopDirective } from './scroll-to-top.directive';
import { DisableCopyDirective } from './disable-copy.directive';
import { HeaderComponent } from "../header/header.component";
import { HighlightDirective } from './highlight.directive';
import { HighlightCountryDirective } from './highlight-country.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, CustomDirectiveDirective, ChangeColorDirective, ScrollToTopDirective, HeaderComponent, HighlightDirective, HighlightCountryDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  constructor(){
    console.log('Check--->', "Directive");
  }

}
