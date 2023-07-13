import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin! : FormGroup;
  errorMessage = undefined;
  constructor(private fb : FormBuilder, private router : Router,
    private authService : AuthService){}
  ngOnInit() {
    this.formLogin = this.fb.group({
      username : this.fb.control("", Validators.required),
      password : this.fb.control("")
    })
  }
  handleLogin() {
    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;
    this.authService.login(username,password)
    .then((resp) => {
      this.router.navigateByUrl("/admin")
    })
    .catch((error) => {
      this.errorMessage = error;
    })
  }
}
