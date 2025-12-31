import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/Auth/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  
  isLoading:boolean=false
  
  errorMsg:string=''

  isSuccess:string=''
 
  RegisterForm: FormGroup= new FormGroup({
    name:new FormControl(null , 
      [Validators.required ,
        Validators.minLength(3), 
        Validators.maxLength(20)]
        ),

    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null, [Validators.required ,
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)]),
    rePassword:new FormControl(null, Validators.required),
    phone:new FormControl(null,Validators.pattern(/^01[0125][0-9]{8}$/)),
  } , this.confirmPassword);

  submitForm():void{
    if(this.RegisterForm.valid){
      
      this.isLoading=true

      this.authService.sendRegisterForm(this.RegisterForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          if(res.message === "success"){
          setTimeout(()=>{
            this.router.navigate(['/login'])
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
  
  // ? Custome Validation for rePassword

  confirmPassword(group:AbstractControl){
    const passowrd =group.get('password')?.value
    const rePassowrd =group.get('rePassword')?.value
    return passowrd === rePassowrd ? null : {MissMatch: true}
  }

  

}
