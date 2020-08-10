import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm = {
    email: '',
    password: ''
  };
  loginErrore = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    // Connect the user to the system with his email and password
    try {
      await this.authService.loginWithEmail(
        this.userForm.email,
        this.userForm.password
      );
      // After checking his details, we enter him in to the system
      this.router.navigate(['/customers']);
    } catch {
      // If the email or password wrongs we show him an error message
      this.loginErrore = !this.loginErrore;
    }
  }
}
