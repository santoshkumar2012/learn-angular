import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cdata',
  imports: [],
  templateUrl: './cdata.component.html',
  styleUrl: './cdata.component.css'
})
export class CdataComponent {

  @Input() inputValue!: string; // Will receive live value from parent
  
}
