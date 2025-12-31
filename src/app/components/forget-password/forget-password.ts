import { AuthService } from './../../core/services/Auth/auth.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {

step:1|2|3 =1;

private readonly authService=inject(AuthService)

private readonly router = inject(Router)

verifyEmail:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})

verifyCode:FormGroup=new FormGroup({
  resetCode: new FormControl(null,[Validators.required,Validators.pattern(/^\d{6}$/)])
})

resetPassword:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null, [Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)]),
})

EmailSubmit():void{
  let emailValue = this.verifyEmail.get('email')?.value

  this.resetPassword.get('email')?.patchValue(emailValue)


  this.authService.setEmailverify(this.verifyEmail.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.statusMsg === "success"){
        this.step =2
      }
    },error:(err)=>{
      console.log(err )
    }
  })
}

CodeSubmit():void{
  this.authService.setCodeverify(this.verifyCode.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.statusMsg === 'Success'){
        this.step =3
      }
    },error:(err)=>{
      console.log(err )
    }
  })
}

ResetPasswordSubmit():void{
  this.authService.setResetPassowrd(this.resetPassword.value).subscribe({
    next:(res)=>{
      console.log(res)
      localStorage.setItem('userToken',res.token)
      this.authService.saveUserData() 
      this.router.navigate(['/home'])
    },error:(err)=>{
      console.log(err )
    }
  })
}

}