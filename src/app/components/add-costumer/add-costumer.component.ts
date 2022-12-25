import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Costumer } from 'src/app/interfaces/Costumer';
import { CostumersService } from 'src/app/services/costumers.service';

@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.css'],
})
export class AddCostumerComponent implements OnInit {
  costumer: Costumer = { id: '', firstN: '', lastN: '', phone: '', email: '' };

  constructor(
    private costumersS: CostumersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  addNewCostumer() {
    this.costumersS
      .addCostumer(this.costumer)
      .then(() => {
        this.activeModal.close();
        this.reset();
      })
      .catch((err) => console.log(err));
  }
  //Add costumer
  reset() {
    this.costumer = { id: '', firstN: '', lastN: '', phone: '', email: '' };
  }
}
