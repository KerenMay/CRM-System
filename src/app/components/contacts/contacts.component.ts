import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  filteredContactString: string = '';
  

  contacts: Contact[] = [];

  constructor(private contactS: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.contactS.getAll();
  }
}
