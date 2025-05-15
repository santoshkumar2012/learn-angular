import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpSharedService } from '../../http-shared.service';
import { ToastrService } from 'ngx-toastr';
import { title } from 'process';
import { response } from 'express';

@Component({
  selector: 'app-crud-api-practise',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './crud-api-practise.component.html',
  styleUrl: './crud-api-practise.component.css'
})
export class CrudApiPractiseComponent {

  product_form!:FormGroup
  products: any
  product_details: any
  productQuery: string = '';
  
  constructor( 
    private http: HttpSharedService,
    private fb: FormBuilder,
    private toaster: ToastrService
  ){}

  product_field = {
    title   : ['', Validators.required],
    brand   : ['', Validators.required],
    category: ['', Validators.required],
    price   : ['', Validators.required]
  }

  ngOnInit(){
    this.getProducts()
    this.initializeForm()
  }

  initializeForm(){
    this.product_form = this.fb.group(this.product_field)
  }

  saveProduct(){
    this.addProducts()
  }

  getProducts(){
    this.http.get('products').subscribe((response: any) => {
      this.products = response.products
    })
  }

  setPayLoad(form: any){
    return{
      title   : form.title,
      brand   : form.brand,
      category: form.category,
      price   : form.price
    }
  }

  addProducts(){
    this.http.post('products/add', this.setPayLoad(this.product_form.value)).subscribe((response: any) => {
      console.log('Check--->', response);
      this.getProducts()
      this.toaster.success("Product added Successfully")
    })
  }

  patchForm(){
    this.product_form.patchValue({
      title   : this.product_details.title,
      brand   : this.product_details.brand,
      category: this.product_details.category,
      price   : this.product_details.price,
    })
  }

  updateProductEdit(){
    this.http.put('products/'+this.product_details.id, this.setPayLoad(this.product_form.value)).subscribe((response: any) => {
      this.getProducts()
      this.toaster.success("Product updated successfully")
    })
  }

  setProduct(product: any){
    this.product_details = product
    this.patchForm()
  }

  deleteProduct(product: any){
    this.http.delete('products/'+product.id).subscribe((response: any) => {
      console.log('Check--->', response);
      this.toaster.success("Product Deleted Successfully")
    })
  }

  searchProduct() {
  const query = this.productQuery.trim();
  if (query) {
    this.http.get(`products/search?q=phone`).subscribe((response: any) => {
        this.products = response.products;
      });
  } else {
    this.getProducts(); // show full list if search box is empty
  }
}

}