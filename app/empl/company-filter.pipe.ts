import { PipeTransform, Pipe } from '@angular/core';
import { IEmployee } from './empl';

@Pipe({
    name: 'companyFilter'
})

export class CompanyFilterPipe implements PipeTransform {
     transform(value: IEmployee[], filterBy: string): IEmployee[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        // return filterBy ? value.filter((empl: IEmployee) => empl.company.toLowerCase().indexOf(filterBy) !== -1) : value;
        return filterBy ? value.filter((empl: IEmployee) => empl.company.toLowerCase().startsWith(filterBy) == true) : value;
    }
}