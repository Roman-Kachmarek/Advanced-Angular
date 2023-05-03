import { Pipe, PipeTransform } from '@angular/core';
import { IContacts } from './lesson04.component';

@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  transform(arrNames: IContacts[], type: boolean): IContacts[] {
    if (!arrNames) return [];
    if (type) {
      return arrNames.sort((a, b) =>
        a.pnumber > b.pnumber ? 1 : a.pnumber < b.pnumber ? -1 : 0
      );
    }
   return  arrNames.sort((a, b) =>
      a.pnumber < b.pnumber ? 1 : a.pnumber > b.pnumber ? -1 : 0
    );
  }
}
