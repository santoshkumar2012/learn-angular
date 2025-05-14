import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { HttpSharedService } from '../../http-shared.service';
import { title } from 'process';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';

@Component({
  selector: 'app-crud-api-practise',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './crud-api-practise.component.html',
  styleUrl: './crud-api-practise.component.css'
})
export class CrudApiPractiseComponent {

  productForm!: FormGroup
  products: any
  product_details: any
  productQuery: string = '';

  constructor( 
    private http: HttpSharedService,
    private fb: FormBuilder,
    private toaster: ToastrService
  ){}

  ngOnInit(){
    this.getProducts()
    this.initailizeForm()
  }

  product_fields = {
    title   : ['', Validators.required],
    brand   : ['', Validators.required],
    category: ['', Validators.required]
  }

  initailizeForm(){
    this.productForm = this.fb.group(this.product_fields)
  }

  resetForm(){ this.initailizeForm() }

  saveProducts(){
    this.createProduct()
    this.updateProduct()
    this.resetForm()
  }

  setProduct(product: any){
    this.product_details = product
    this.pathForm()
  }

  getProducts(){
    this.http.get('products').subscribe((response: any) => {
      this.products = response.products
      console.log('Products List --->', this.products);
    })
  }

  setPayLoad(form: any){
    return{
      title   : form.title,
      brand   : form.brand,
      category: form.category
    }
  }

  createProduct(){
    this.http.post('products/add', this.setPayLoad(this.productForm.value)).subscribe((response: any) => {
      this.getProducts()
      this.toaster.success("Prdoct Added Successfully")
      this.resetForm()
     })
  }

  pathForm(){
    this.productForm.patchValue({
      title   : this.product_details.title,
      brand   : this.product_details.brand,
      category: this.product_details.category
    })
  }

  updateProduct(){
    this.http.put('products/'+this.product_details.id, this.setPayLoad(this.productForm.value)).subscribe((response: any) => {
      this.getProducts()
      this.toaster.success("Product Updated Successfully")
    })
  }

  deleteProduct(product: any){
    this.http.delete('products/'+product.id).subscribe((response: any) => {
      console.log('Check--->', product.id);
      this.toaster.success("Product Delete Successfully")
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