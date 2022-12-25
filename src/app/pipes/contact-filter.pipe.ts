import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/Contact';

@Pipe({
  name: 'contactFilter',
})
export class ContactFilterPipe implements PipeTransform {
  transform(
    contacts: Contact[],
    theProp: keyof Contact,
    value: string
  ): Contact[] {
    let filteredContacts: Contact[] = [];

    for (let contact of contacts) {
      if (
        (contact[theProp] as string).toLowerCase().includes(value.toLowerCase())
      ) {
        filteredContacts.push(contact);
      }
    }

    return filteredContacts;
  }
}
