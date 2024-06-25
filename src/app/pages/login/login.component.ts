import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
    ],
    animations: [
      trigger(
        'inOutAnimation', 
        [
          transition(
            ':enter', 
            [
              style({ height: 0, opacity: 0 }),
              animate('0.5s linear', 
                      style({ height: 300, opacity: 1 }))
            ]
          ),
          transition(
            ':leave', 
            [
              style({ height: 300, opacity: 1 }),
              animate('0.5s linear', 
                      style({ height: 0, opacity: 0 }))
            ]
          )
        ]
      )
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginOrSignup: boolean = true
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
  }

  changeForms(){
    this.loginOrSignup = !this.loginOrSignup
  }
}
