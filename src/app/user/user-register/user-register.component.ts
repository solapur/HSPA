import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
    userName: new FormControl('Mahesh', Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email ]),
    password: new FormControl(null,[Validators.required, Validators.maxLength(8), Validators.minLength(4)]),
    confirmPassword: new FormControl(null,[Validators.required]),
    mobile: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  }, this.passwordMatchingValidator1);
  }
  onSubmit(){
    console.log(this.registrationForm);
  }

  passwordMatchingValidator1(fgroup:AbstractControl)  {
    return fgroup.get('password')!.value === fgroup.get('confirmPassword')!.value ? null: { noPasswordMatched: true};
  }

   passwordMatchingValidator(abstractControl: AbstractControl)  {
    let password = abstractControl.get('password')!.value;
    let confirmPassword = abstractControl.get('confirmPassword')!.value;
    return password === confirmPassword ? null : {noPasswordMatched: true};
  }

  get userName(){
     return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
}
