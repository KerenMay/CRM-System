import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  alertErr: string = '';
  user: User = { email: '', password: '' };

  constructor(private usersS: UsersService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.usersS
      .loginCheck(this.user)
      .then((userData) => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', userData.user.email as string);
        this.router.navigateByUrl('costumers');
      })
      .then((err) => {
        console.log(err);
      });
  }

  loginWithGoogle() {
    this.usersS
      .loginGoogle()
      .then((userData) => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', userData.user.email as string);
        this.router.navigateByUrl('costumers');
      })
      .catch((err) => console.log(err));
  }
}
