import { PipeTransform, Pipe } from '@angular/core';
import { IEmployee } from './empl';

@Pipe({
    name: 'nameFilter'
})

export class NameFilterPipe implements PipeTransform {
     transform(value: IEmployee[], filterBy: string): IEmployee[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: IEmployee) => product.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}