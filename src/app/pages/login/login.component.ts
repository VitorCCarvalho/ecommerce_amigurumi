import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.formLogin = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  onSubmit(){
    console.log("foi")
  }
}
