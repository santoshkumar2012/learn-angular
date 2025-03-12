import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ChangeColorDirective } from './change-color.directive';
import { ScrollToTopDirective } from './scroll-to-top.directive';
import { DisableCopyDirective } from './disable-copy.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, CustomDirectiveDirective, ChangeColorDirective, ScrollToTopDirective, DisableCopyDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

}
