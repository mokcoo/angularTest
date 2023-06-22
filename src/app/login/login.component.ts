import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),

  })
  constructor(private router:Router){}
  login(){
    if(this.form.invalid){
      return;
    }
    this.router.navigate(["/dashboard"]);
  }
}
