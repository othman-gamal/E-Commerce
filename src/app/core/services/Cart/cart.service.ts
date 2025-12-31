import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  userToken = localStorage.getItem('userToken')
  constructor(private httpClient:HttpClient){}

  addProductToCart(id:string):Observable<any>{
    return this.httpClient.post(`${environment.BASE_URL}/cart`,
      {
        "productId":id
      } ,
      {
        //configuration part
        headers:{
          token:this.userToken!
        }
      }
    )
  }
  
}

//post put ---> url R , body R ,header
//get delete --> url R , header 