import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      name: 'Eileen Russell',
      email: 'eileenrussell@xumonk.com',
      birthday: new Date('2020-08-09'),
      phones: ['+1 (824) 598-2328'],
    },
    {
      name: 'Francis Mckay',
      email: 'francismckay@xumonk.com',
      birthday: new Date('2014-01-15'),
      phones: [],
    },
    {
      name: 'Jewell Schultz',
      email: 'jewellschultz@xumonk.com',
      birthday: new Date('2020-07-03'),
      phones: ['+1 (932) 538-2367', '+1 (949) 503-2184'],
    },
    {
      name: 'Goodman Hunter',
      email: 'goodmanhunter@xumonk.com',
      birthday: new Date('2016-02-22'),
      phones: [],
    },
    {
      name: 'Beck Webb',
      email: 'beckwebb@xumonk.com',
      birthday: new Date('2019-08-24'),
      phones: ['+1 (986) 566-2317', '+1 (950) 438-3960', '+1 (997) 562-3636'],
    },
    {
      name: 'Tabitha Combs',
      email: 'tabithacombs@xumonk.com',
      birthday: new Date('2018-03-24'),
      phones: ['+1 (897) 437-2473'],
    },
    {
      name: 'Schmidt Jennings',
      email: 'schmidtjennings@xumonk.com',
      birthday: new Date('2014-09-24'),
      phones: [],
    },
    {
      name: 'Bullock Martinez',
      email: 'bullockmartinez@xumonk.com',
      birthday: new Date('2016-05-18'),
      phones: ['+1 (889) 424-3036', '+1 (819) 403-2637'],
    },
    {
      name: 'Reva Stafford',
      email: 'revastafford@xumonk.com',
      birthday: new Date('2022-02-21'),
      phones: ['+1 (929) 465-2033', '+1 (952) 546-2373'],
    },
    {
      name: 'Franco Mccray',
      email: 'francomccray@xumonk.com',
      birthday: new Date('2020-03-02'),
      phones: ['+1 (900) 587-3989'],
    },
  ];
  constructor() {}
  getAll(): Contact[] {
    return this.contacts;
  }
}
