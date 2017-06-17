import { PipeTransform, Pipe } from '@angular/core';
import { IEmployee } from './empl';

@Pipe({
    name: 'nameFilter'
})

export class NameFilterPipe implements PipeTransform {
     transform(value: IEmployee[], filterBy: string): IEmployee[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        //return filterBy ? value.filter((empl: IEmployee) => empl.name.toLowerCase().indexOf(filterBy) !== -1) : value;
        return filterBy ? value.filter((empl: IEmployee) => empl.name.toLowerCase().startsWith(filterBy) == true) : value;
    }
}