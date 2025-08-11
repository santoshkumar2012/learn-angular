import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: 'electronics' | 'clothing' | 'home';
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private products = signal<Product[]>([
    { id: 1, name: 'Laptop', category: 'electronics' },
    { id: 2, name: 'T-Shirt', category: 'clothing' },
    { id: 3, name: 'Microwave', category: 'home' },
    { id: 4, name: 'Jeans', category: 'clothing' }
  ]);

  private selectedCategory = signal<'all' | 'electronics' | 'clothing' | 'home'>('all');

  filteredProducts = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') return this.products();
    return this.products().filter(p => p.category === category);
  });

  setCategory(category: 'all' | 'electronics' | 'clothing' | 'home') {
    this.selectedCategory.set(category);
  }

  getCategory() {
    return this.selectedCategory();
  }

}
