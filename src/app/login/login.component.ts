import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormBuilder, FormArray } from '@angular/forms';

import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    userName: '',
    userPassword: ''
  };

  constructor(public loginService: LoginService) {
  // constructor() {
  }
 
  checkValid(element: NgModel) {
    if (!element.pristine && element.touched && element.errors && element.errors.required){
        return false;
    } else {
      return true;
    }
  }
  
  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.data));
    this.loginService.loginUser(this.data);
  }


  // onSavePost(loginForm: NgForm) {
  //   this.submitted = true;
  //   console.log(loginForm.value.userName);
  // }
}
