import { Component, OnInit  } from '@angular/core';
import { IEmployee } from './empl';
import { EmplService} from './empl.service';

@Component({
    templateUrl: './app/empl/empl-list.component.html',
     providers:[EmplService]
})

export class EmplListComponent { 
     employees: IEmployee[];
     constructor(private _emplService: EmplService){}

     ngOnInit() { 
        console.log('on init');
        this._emplService.getProducts().subscribe( employees => this.employees = employees  );
    }    
}
