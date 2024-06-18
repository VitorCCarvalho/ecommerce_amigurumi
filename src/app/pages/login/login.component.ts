import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    ],
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginOrSignup: boolean = false
  formLogin!: FormGroup
  formSignup!: FormGroup

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.formLogin = this.formBuilder.group({
      l_email: '',
      l_password: ''
    })
    this.formSignup = this.formBuilder.group({
      s_email: '',
      s_password: '',
      s_password_confirm: ''
    })
  }

  onSubmit(){
    console.log("foi")
  }

  changeForms(){
    this.loginOrSignup = !this.loginOrSignup
  }
}
