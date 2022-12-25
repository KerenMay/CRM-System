import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home-contacts',
  templateUrl: './home-contacts.component.html',
  styleUrls: ['./home-contacts.component.css'],
})
export class HomeContactsComponent implements OnInit {
  email!: string;
  opened = true;

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
