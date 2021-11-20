import { StorageService } from './../../common-services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('',[Validators.required,Validators.email]);

  constructor(
    private router:Router,
    private storageService:StorageService
  ) { }

  
  ngOnInit(): void {
    
  }
  login(){
    this.storageService.set('email',this.email.value)
    console.log('The value is '+ this.storageService.get('email'));
    this.router.navigate(['dashboard']);
  }

}
