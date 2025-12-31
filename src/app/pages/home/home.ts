import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { CategoryService } from '../../core/services/categories/category.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Icategory } from '../../shared/interfaces/icategory';
import { RouterLink } from "@angular/router";
import { TermtextPipe } from '../../core/pipes/termtext-pipe';
import { SearchForPipe } from '../../core/pipes/search-for-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, RouterLink , TermtextPipe,SearchForPipe, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements  OnInit{

  // private readonly id =

searchInput:string =''

  customMainSlider : OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true   ,
    pullDrag: false,
    autoplay:true, 
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: [' ', ' '],
    items:1,
    nav: true
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  private readonly productService = inject(Products)
  private readonly categoryService = inject(CategoryService)

  Products:Iproduct[]=[]
  Categories:Icategory[]=[]

  getProductsData() : void{
    this.productService.getAllProducts().subscribe({
      next:(res)=>{
        this.Products = res.data;
      },
      error:(err)=>{
        console.log(err)
      },
    });
  }

  getCategoryData():void{
    this.categoryService.getAllCategories().subscribe({
      next:(res)=>{
        this.Categories=res.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  ngOnInit():void{
    this.getProductsData();
    this.getCategoryData();
}
  
}
