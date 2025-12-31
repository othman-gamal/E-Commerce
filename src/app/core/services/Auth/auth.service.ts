import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
      private readonly router=inject(Router)

       userData:any= null

  constructor(private httpClient:HttpClient){}

  sendRegisterForm(data:object):Observable<any>{
    return this.httpClient.post(`${environment.BASE_URL}/api/v1/auth/signup`, data )
  }

  sendLoginForm(data:object):Observable<any>{
    return this.httpClient.post(`${environment.BASE_URL}/api/v1/auth/signin`, data)
  }

  //? just to decode and save data from token after de coding 
  saveUserData():void{
if(localStorage.getItem('userToken') !== null){
  this.userData = jwtDecode( localStorage.getItem('userToken')! )
  console.log('USER DATA : ' , this.userData  )
}
  }



  logOut():void{
    localStorage.removeItem('userToken');
    this.userData = null;
    //! if there is any api delete the token i must call it (api) here
    this.router.navigate(['/login'])
  }

  setEmailverify(data:object):Observable<any>{
    return this.httpClient.post(`${environment.BASE_URL}/api/v1/auth/forgotPasswords`,data)
   }
  setCodeverify(data:object):Observable<any>{ 
    return this.httpClient.post(`${environment.BASE_URL}/api/v1/auth/verifyResetCode`,data)
   }
  setResetPassowrd(data:object):Observable<any>{
    return this.httpClient.put(`${environment.BASE_URL}/api/v1/users/changeMyPassword`,data)
   }

}
