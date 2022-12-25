import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Costumer } from 'src/app/interfaces/Costumer';
import { CostumersService } from 'src/app/services/costumers.service';
import { AddCostumerComponent } from '../add-costumer/add-costumer.component';
import { EditCostumerComponent } from '../edit-costumer/edit-costumer.component';

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrls: ['./costumers.component.css'],
})
export class CostumersComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  phoneOfCostumer: string = '';
  // costumer-table
  costumers: Costumer[] = [];

  constructor(private costumersS: CostumersService, private modal: NgbModal) {}

  ngOnInit(): void {
    //costumer-table
    this.costumersS.getCostumers().subscribe({
      next: (costumersData: Costumer[]) => (this.costumers = costumersData),
    });
  }
  //Add costumer

  //costumer-table
  deleteCostumer(costumer: Costumer) {
    if (confirm('Are you sure?')) {
      this.costumersS
        .deleteCostumer(costumer)
        .then(() => console.log('book was deleted'))
        .catch((err) => console.log(err));
    }
  }
  //costumer-table
  editCostumer(costumer: Costumer) {
    let modalRef = this.modal.open(EditCostumerComponent, {
      size: 'md',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = costumer.id;
  }
  addNewCostumer() {
    let ModalRef = this.modal.open(AddCostumerComponent, {
      size: 'md',
      centered: true,
      windowClass: 'accent',
    });
  }
}
