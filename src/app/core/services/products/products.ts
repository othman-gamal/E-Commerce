import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Products {
  //? hena baklem el api 
  private BASE_URL = 'https://ecommerce.routemisr.com';
  constructor(private httpClient:HttpClient) {}

  getAllProducts():Observable<any>
{
  return this.httpClient.get(this.BASE_URL + '/api/v1/products')

}

getSpecificProduct(id:string):Observable<any>
{
  return this.httpClient.get(this.BASE_URL + `/api/v1/products/${id}`)

}

}
