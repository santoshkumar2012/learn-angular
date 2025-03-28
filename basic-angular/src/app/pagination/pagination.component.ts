import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  items: string[] = [];  // Store 100 items
  pagedItems: string[] = []; // Store items for current page
  pageSize = 10; // Number of items per page
  currentPage = 1; // Current active page
  totalPages = 0; // Total number of pages -->

  ngOnInit() {
    // Generating 100 sample items
    this.items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    this.totalPages = Math.ceil(this.items.length / this.pageSize);
    this.updatePage();
  }

  // Function to update items for the current page
  updatePage() {
     const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedItems = this.items.slice(startIndex, endIndex); 
  }

  // Function to change page
  goToPage(page: number) {
     if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePage();
    } 
  }

}
