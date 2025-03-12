import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirectiveDirective } from './custom-directive.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, CustomDirectiveDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

}
