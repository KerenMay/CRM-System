import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-hor-navbar',
  templateUrl: './hor-navbar.component.html',
  styleUrls: ['./hor-navbar.component.css'],
})
export class HorNavbarComponent implements OnInit {
  opened=false;
  email!: string;
  constructor(private usersS: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email') as string;
  }
  logout() {
    this.usersS
      .logout()
      .then(() => {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('email');
        this.router.navigateByUrl('login');
      })
      .catch((err) => console.log(err));
  }
}
