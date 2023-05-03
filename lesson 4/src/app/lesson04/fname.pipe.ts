import { Pipe, PipeTransform } from '@angular/core';
import { IContacts } from './lesson04.component';

@Pipe({
  name: 'fname',
})
export class FnamePipe implements PipeTransform {
  transform(arrNames: IContacts[], type: boolean): IContacts[] {
    if (!arrNames) return [];
    if (type) {
      return arrNames.sort((a, b) =>
        a.fname > b.fname ? 1 : a.fname < b.fname ? -1 : 0
      );
    }
    return arrNames.sort((a, b) =>
      a.fname < b.fname ? 1 : a.fname > b.fname ? -1 : 0
    );
  }
}
