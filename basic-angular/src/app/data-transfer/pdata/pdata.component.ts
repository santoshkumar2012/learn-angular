import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdataComponent } from "../cdata/cdata.component";

@Component({
  selector: 'app-pdata',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CdataComponent],
  templateUrl: './pdata.component.html',
  styleUrl: './pdata.component.css'
})
export class PdataComponent {

parentInput = '';

}
