import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpSharedService } from '../../http-shared.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-form-dynamic',
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './crud-form-dynamic.component.html',
  styleUrl: './crud-form-dynamic.component.css'
})
export class CrudFormDynamicComponent {

  products: any
  product_form!: FormGroup
  product_details: any

  constructor(
    private fb: FormBuilder,
    private http: HttpSharedService,
    private toaster: ToastrService
  ) { }

  productform_fields = [
    { name: 'title', label: 'Product Title', required: true },
    { name: 'category', label: 'Product Category', required: true },
    { name: 'brand', label: 'Brand', required: true },
    { name: 'description', label: 'Description', required: true },
    { name: 'price', label: 'Price', required: true }
  ];

  ngOnInit() {
    this.initializeForm()
    this.getProduct()
  }

  initializeForm() {
    const group: any = {};
    this.productform_fields.forEach(field => {
      group[field.name] = field.required ? ['', Validators.required] : [''];
    });
    this.product_form = this.fb.group(group);
  }

  resetForm() {
    this.initializeForm()
    this.product_details = null;
  }

  saveProduct() {
    if (this.product_details?.id) {
      this.productUpdate();
    } else {
      this.createProduct();
    }
  }

  getProduct() {
    this.http.get('products').subscribe((response: any) => {
      this.products = response.products;
    })
  }

  setPayLoad(form: any) {
    const payload: any = {};
    this.productform_fields.forEach(field => {
      payload[field.name] = form[field.name];
    });
    return payload;
  }


  createProduct() {
    this.http.post('products/add', this.setPayLoad(this.product_form.value)).subscribe((response: any) => {
      this.resetForm()
      this.toaster.success('Product has been created')
    })
  }

  patchForm() {
    const patch: any = {};
    this.productform_fields.forEach(field => {
      patch[field.name] = this.product_details[field.name];
    });
    this.product_form.patchValue(patch);
  }


  productUpdate() {
    this.http.put('products/' + this.product_details.id, this.setPayLoad(this.product_form.value)).subscribe((response: any) => {
      this.resetForm()
      this.toaster.success('Product has been updated')
    })
  }

  setProduct(product: any) {
    this.product_details = product
    this.patchForm()
  }

  deleteProduct(product: any) {
    this.http.delete('products/' + product.id).subscribe((response: any) => {
      this.toaster.success('Product has been deleted')
    })
  }
}
