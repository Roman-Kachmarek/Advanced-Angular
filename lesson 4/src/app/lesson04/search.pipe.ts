import { Pipe, PipeTransform } from '@angular/core';
import { IContacts } from './lesson04.component';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(arrNames: IContacts[], field: string): IContacts[] {
    if (!arrNames) return [];
    if (!field) return arrNames;
    return arrNames.filter((contacts) =>
      contacts.fname.toLowerCase().includes(field.toLocaleLowerCase())||
      contacts.sname.toLowerCase().includes(field.toLocaleLowerCase())||
      contacts.pnumber.toLowerCase().includes(field.toLocaleLowerCase())
    );
  }
}
