import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { HttpSharedService } from '../../../../http-shared.service';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-switchmap',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './switchmap.component.html',
  styleUrl: './switchmap.component.css'
})
export class SwitchmapComponent {
  // searchControl = new FormControl<string>('', { nonNullable: true });
  
  searchControl = new FormControl();
  products: any[] = [];

  constructor(private http: HttpSharedService) {}

  ngOnInit(): void {
    
  this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term) => this.http.get(`products/search?q=${term}`))
  ).subscribe((res: any) => {
    this.products = res.products;
  });
  this.getProduct();
}

  getProduct() {
    this.http.get('products').subscribe((response: any) => {
      this.products = response.products;
    });
  }


}
