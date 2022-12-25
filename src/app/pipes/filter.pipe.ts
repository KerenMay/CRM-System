import { Pipe, PipeTransform } from '@angular/core';
import { SAMLAuthProvider } from '@angular/fire/auth';
import { Costumer } from '../interfaces/Costumer';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    costumers: Costumer[],
    propName: keyof Costumer,
    value: string
  ): Costumer[] {
    let filteredCostumers: Costumer[] = [];
    for (let costumer of costumers) {
      if (
        (costumer[propName] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        filteredCostumers.push(costumer);
      }
    }

    return filteredCostumers;
  }
}
