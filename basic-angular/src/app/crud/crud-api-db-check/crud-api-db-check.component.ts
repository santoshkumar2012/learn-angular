import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpSharedService } from '../../http-shared.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-crud-api-db-check',
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './crud-api-db-check.component.html',
  styleUrl: './crud-api-db-check.component.css'
})
export class CrudApiDbCheckComponent {

   products: any
    product_form!: FormGroup
    product_details: any
    
  
    constructor( 
      private fb: FormBuilder,
      private http: HttpSharedService,
      private toaster: ToastrService
     ){}
  
     productform_field = {
      title       : ['', Validators.required],
      category    : ['', Validators.required],
      brand       : ['', Validators.required],
      description : ['', Validators.required]
       }
  
    ngOnInit(){
      this.intializeForm()
      this.getProduct()
    }
  
    intializeForm(){
      this.product_form = this.fb.group(this.productform_field)
    }
  
    resetForm(){ 
      this.intializeForm()
      this.product_details = null;
     }
  
    isDuplicateProduct(title: string): boolean {
    return this.products?.some((product: any) => product.title.trim().toLowerCase() === title.trim().toLowerCase());
  }
  
    saveProduct(){
      const title = this.product_form.value.title;
  
        // Check: If editing, and title hasn't changed, skip duplicate check
      if (this.product_details?.id && title === this.product_details.title.trim().toLowerCase()) {
      this.productUpdate();
      return;
     }
  
      if (this.isDuplicateProduct(title)) {
        this.toaster.error('Product title already exists!');
        return;
      }
  
        // Create or Update
    if (this.product_details?.id) {
      this.productUpdate();
    } else {
      this.createProduct();
    }
  
    }
  
    getProduct(){
        this.http.get('products').subscribe((response: any) => {
          this.products = response.products;
        })
    }
  
    setPayLoad(form: any){
      return{
        title       : form.title,
        category    : form.category,
        brand       : form.brand,
        description : form.description
      }
    }
  
    createProduct(){
      this.http.post('products/add', this.setPayLoad(this.product_form.value)).subscribe((response:any) => {
        this.resetForm()
        this.toaster.success('Product has been created')
      })
    }
  
    patchForm(){
        this.product_form.patchValue({
        title       : this.product_details.title,
        category    : this.product_details.category,
        brand       : this.product_details.brand,
        description :this.product_details.description
      })
    }
  
    productUpdate(){
      this.http.put('products/'+this.product_details.id, this.setPayLoad(this.product_form.value)).subscribe((response: any) => {
        this.resetForm()
        this.toaster.success('Product has been updated')
      })
    }
  
    setProduct(product: any){
      this.product_details = product
      this.patchForm()
    }
  
    deleteProduct(product: any){
      this.http.delete('products/'+product.id).subscribe((response: any) => {
        this.toaster.success('Product has been deleted')
      })
    }

}
