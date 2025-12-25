import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/Auth/auth.service';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  
  private readonly authService = inject(AuthService)
  

  RegisterForm: FormGroup= new FormGroup({
    name:new FormControl(null , 
      [Validators.required ,
        Validators.minLength(3), 
        Validators.maxLength(20)]
        ),

    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null, [Validators.required ,
      Validators.pattern(/^[A-Z]\w(7,)$/)]),
    rePassword:new FormControl(null, Validators.required),
    phone:new FormControl(null,Validators.pattern(/^01[0125][0-9]{8}$/)),
  } , this.confirmPassword);

  submitForm():void{
  }
  
  // ? Custome Validation for rePassword

  confirmPassword(group:AbstractControl){
    const passowrd =group.get('password')?.value
    const rePassowrd =group.get('rePassword')?.value
    return passowrd === rePassowrd ? null : {MissMatch: true}
  }

  

}
