import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = { email: '', password: '' };

  constructor(private usersS: UsersService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.usersS
      .register(this.user)
      .then((userData) => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', userData.user.email as string);
        this.router.navigateByUrl('costumers');
      })
      .catch((err) => console.log(err));
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
