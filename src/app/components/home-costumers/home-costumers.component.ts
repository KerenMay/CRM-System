import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home-costumers',
  templateUrl: './home-costumers.component.html',
  styleUrls: ['./home-costumers.component.css'],
})
export class HomeCostumersComponent implements OnInit {
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
