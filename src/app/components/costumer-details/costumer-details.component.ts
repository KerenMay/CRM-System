import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Costumer } from 'src/app/interfaces/Costumer';
import { CostumersService } from 'src/app/services/costumers.service';

@Component({
  selector: 'app-costumer-details',
  templateUrl: './costumer-details.component.html',
  styleUrls: ['./costumer-details.component.css'],
})
export class CostumerDetailsComponent implements OnInit {
  costumerId!: string;
  costumer: Costumer = {
    id: '',
    firstN: '',
    lastN: '',
    phone: '',
    email: '',
    hobby: '',
    age: 0,
    address: '',
    appr: '',
  };

  constructor(
    private costumersS: CostumersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.costumerId = this.activatedRoute.snapshot.params['id'];
    this.costumersS.getCostumerById(this.costumerId).subscribe({
      next: (costumerData: Costumer) => (this.costumer = costumerData),
    });
  }
}
