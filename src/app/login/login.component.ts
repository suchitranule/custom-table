import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  isLogin:Boolean;
  @Output()
  islogged:EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router , private Auth:AuthenticationService , fb: FormBuilder) {
      this.loginForm = fb.group ({
        'username':'',
        'password':''
      })

  }
  ngOnInit() {
  }

  checkIsLogged() {
  }
  login(){
    this.router.navigate(['/dashboard']);
  }
}
