import { Pipe, PipeTransform } from '@angular/core';
import { IContacts } from './lesson04.component';

@Pipe({
  name: 'sname',
})
export class SnamePipe implements PipeTransform {
  transform(arrNames: IContacts[], type: boolean): IContacts[] {
    if (!arrNames) return [];
    if (type) {
      return arrNames.sort((a, b) =>
        a.sname > b.sname ? 1 : a.sname < b.sname ? -1 : 0
      );
    }
    return arrNames.sort((a, b) =>
      a.sname < b.sname ? 1 : a.sname > b.sname ? -1 : 0
    );
  }
}
