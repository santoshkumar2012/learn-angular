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

  //itemss = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]

  items: string[] = [];  // Store 100 items
  pagedItems: string[] = []; // Store items for current page
  pageSize = 10; // Number of items per page
  currentPage = 1; // Current active page
  totalPages = 0; // Total number of pages -->

  ngOnInit() {
    // Generating 100 sample items
    //this.items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    //this.totalPages = Math.ceil(this.items.length / this.pageSize);
    this.createItemsList();
  }

  createItemsList(){
    for(let i=1; i<=100; i++){
      this.items.push("Item" +' '+ i)
    }
    console.log('Check--->', this.items);
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
