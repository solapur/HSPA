import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({
    userName: new FormControl('Mahesh', Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email ]),
    password: new FormControl(null,[Validators.required, Validators.maxLength(8), Validators.minLength(4)]),
    confirmPassword: new FormControl(null,[Validators.required]),
    mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
  });



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.registrationForm);
  }

}
