import { Component, inject, OnInit, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o'; // Ensure this is imported

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule], // Include CarouselModule here
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productService = inject(Products);
  private readonly platformId = inject(PLATFORM_ID);

  // 1. Use a Signal for product details
  productDetails = signal<Iproduct | null>(null);
  
  // 2. Control when the carousel renders (Browser only)
  isBrowser = signal(false);

  // Carousel Configuration
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: true
  };

  ngOnInit(): void {
    // Set browser flag
    this.isBrowser.set(isPlatformBrowser(this.platformId));

    const id = this.activatedRoute.snapshot.params['id'];
    
    if (id) {
      this.productService.getSpecificProduct(id).subscribe({
        next: (res) => {
          // 3. Update the signal - this is more stable than plain variables
          this.productDetails.set(res.data);
        },
        error: (err) => {
          console.error('Error fetching product:', err);
        },
      });
    }
  }
}