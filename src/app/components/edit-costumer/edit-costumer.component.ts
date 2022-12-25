import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Costumer } from 'src/app/interfaces/Costumer';
import { CostumersService } from 'src/app/services/costumers.service';

@Component({
  selector: 'app-edit-costumer',
  templateUrl: './edit-costumer.component.html',
  styleUrls: ['./edit-costumer.component.css'],
})
export class EditCostumerComponent implements OnInit {
  @Input() id!: string;
  costumer: Costumer = { id: '', firstN: '', lastN: '', phone: '', email: '' };

  constructor(
    private costumersS: CostumersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.costumersS.getCostumerById(this.id).subscribe({
      next: (costumerData: Costumer) => (this.costumer = costumerData),
    });
  }

  editCostumer() {
    this.costumersS
      .updateCostumer(this.costumer)
      .then(() => this.activeModal.close())
      .catch((err) => console.log(err));
  }
}
