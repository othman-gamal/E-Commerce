import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
     private BASE_URL = 'https://ecommerce.routemisr.com';

  constructor(private httpClient:HttpClient) {}
  getAllCategories():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/api/v1/categories`)
  }
  getSpecificCategory(id:string ):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}api/v1/categories/${id}`)
  }
}
