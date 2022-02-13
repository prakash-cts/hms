import { StorageService } from './../../common-services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/common-objects/my-error-state-matcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]);
  submitted = false;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private storageService:StorageService) { }

  ngOnInit(): void {
    this.storageService.set('email','prakash@gmail.com');
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
      // password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
    })
  }

  onSubmit(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.loginForm.value, null, 2));
    console.log(this.loginForm.value.email);
    this.storageService.get('email');
    //if(this.)
    console.log('The value is '+ this.storageService.get('email'));
    this.router.navigate(['dashboard']);
  }

}
