import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommondataService } from '../services/commondata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any;
  password:any;
  isLoginClicked:boolean = false;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(public service:CommondataService, private router:Router) { }

  loginUser(event:any){
    this.isLoginClicked = true;
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    if(this.username === 'test' && this.password === 'password'){
      this.service.loggedIn = true;
    }else{
      this.service.loggedIn = false;
    }
    if(this.service.loggedIn)
    {
      this.router.navigate(['chat'])
    }else{
      alert("Please contact administrator.")
    }
  }

  signUpUser(event:any){
    console.log("Sign Up screen to be done as well.")
  }
  ngOnInit(): void {
    
  }
}
