import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user-service/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user: any = {}
  isFormSubmitted: boolean = false;
  constructor(private fbuilder: FormBuilder, private userservice: UserService) {

  }

  ngOnInit(): void {
  //   this.registrationForm = new FormGroup({
  //   userName: new FormControl('Mahesh', Validators.required),
  //   email: new FormControl(null, [Validators.required, Validators.email ]),
  //   password: new FormControl(null,[Validators.required, Validators.maxLength(8), Validators.minLength(4)]),
  //   confirmPassword: new FormControl(null,[Validators.required]),
  //   mobile: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  // }, this.passwordMatchingValidator1);
  this.createRegisterationForm();

  }

  createRegisterationForm()
  {
       this.registrationForm = this.fbuilder.group({
       userName: [null, Validators.required],
       email: [null, [Validators.required, Validators.email ]],
       password: [null,[Validators.required, Validators.maxLength(8), Validators.minLength(4)]],
       confirmPassword: [null,[Validators.required]],
       mobile: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
       }, {validators:this.passwordMatchingValidator});
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.isFormSubmitted = true;
    if(this.registrationForm.valid)
    {
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.userservice.saveUser(this.user);
    this.registrationForm.reset();
    this.isFormSubmitted = false;
    }
 }

  passwordMatchingValidator(fgroup:AbstractControl)  {
    return fgroup.get('password')!.value === fgroup.get('confirmPassword')!.value ? null: { noPasswordMatched: true};
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
