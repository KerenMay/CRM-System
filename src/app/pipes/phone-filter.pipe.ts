import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/Contact';

@Pipe({
  name: 'phoneFilter',
})
export class PhoneFilterPipe implements PipeTransform {
  transform(
    contacts: Contact[],
    props: keyof Contact,
    phoneArr: string[]
  ): Contact[] {
    let filteredUser: Contact[] = [];
    for (let contact of contacts) {
      if (
        (contact[props] as string[]).some(number=> phoneArr.indexOf(number) >=0)
      ) {
        filteredUser.push(contact);
      }
    }
    return filteredUser;
  }
}
