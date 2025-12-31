import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/Auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

 private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  
  isLoading:boolean=false
  
  errorMsg:string=''

  isSuccess:string=''
 
  LoginForm: FormGroup= new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null, [Validators.required]),
    
  });

  submitForm():void{
    if(this.LoginForm.valid){
      
      this.isLoading=true

      this.authService.sendLoginForm(this.LoginForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          if(res.message === "success"){
          setTimeout(()=>{

            localStorage.setItem('userToken',res.token) 
            
            this.authService.saveUserData()
            
            this.router.navigate(['/home'])

          },500)             
            this.isSuccess = res.message
          }

          this.isLoading=false;

        },error:(err:HttpErrorResponse)=>{
          console.log(err)
          this.isLoading=false
          this.errorMsg = err.error.message
        }
      })
    }

   
  } 

  
  

}
