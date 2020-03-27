import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],

  });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.success = true;
    this.login();
  }

  login() {

  }

logout() {



}

  ngOnInit() {
  }


}
