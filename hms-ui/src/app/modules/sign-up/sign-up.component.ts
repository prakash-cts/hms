import { DialogService } from './../../common-services/dialog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/common-objects/my-error-state-matcher';
import Validation from 'src/app/common-objects/validation';
import { StorageService } from 'src/app/common-services/storage.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  form!: FormGroup;
  name = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]);
  confirmPassword = new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]);

  submitted = false;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private storageService:StorageService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      name:this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword},{
        validators: [Validation.match('password', 'confirmPassword')]
      
      // password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
    })
  }

  onSubmit(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    console.log(this.form.value.email);
    this.storageService.set('name',this.name.value);
    this.storageService.set('email',this.email.value);
    this.storageService.set('password',this.password.value);
    this.router.navigate(['login']);
  }
  reset(){
    
    this.dialogService.openDialog('Do you wish to reset?').then(result=>{
      if(result === 'submit'){
        this.form.reset();
        for (let control in this.form.controls) {
          this.form.controls[control].setErrors(null);
        }
      }
    });
  }

}
