import { Component, signal, computed } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: 'electronics' | 'clothing' | 'home';
}

@Component({
  selector: 'app-product-filter',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {

  products = signal<Product[]>([
    { id: 1, name: 'Laptop', category: 'electronics' },
    { id: 2, name: 'T-Shirt', category: 'clothing' },
    { id: 3, name: 'Microwave', category: 'home' },
    { id: 4, name: 'Shoes', category: 'clothing' },
    { id: 5, name: 'Fan', category: 'home' }
  ]);

  selectedCategory = signal<'all' | 'electronics' | 'clothing' | 'home'>('all');

  filteredProducts = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') return this.products();
    return this.products().filter(p => p.category === category);
  });

  setFilter(cat: 'all' | 'electronics' | 'clothing' | 'home') {
    this.selectedCategory.set(cat);
  }

  
  firstName = signal('');
  lastName = signal('');
  fullName = computed(()=> this.firstName() + this.lastName())

}
