import { Component, OnInit  } from '@angular/core';
import { IEmployee } from './empl';
import { EmplService} from './empl.service';

@Component({
    template: `<h1>Filter by name and company</h1>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>
                    <input class="form-control" type="text" [(ngModel)]="termName">
                </th>
                <th>
                    <input class="form-control" type="text" [(ngModel)]="termCompany">  
                </th>
            </tr>        
            <tr>
                <th>name</th>
                <th>company</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor='let employee of employees | nameFilter:termName | companyFilter:termCompany | async'>
                <td>{{ employee.name}}</td>
                <td>{{ employee.company }}</td>
            </tr>
        </tbody>
    </table>`,
    selector: 'app-empl',
    providers:[EmplService]
})

export class EmplListComponent { 
     employees: IEmployee[];
     constructor(private _emplService: EmplService){}

     ngOnInit() { 
        console.log('on init');
        this._emplService.getWorkers().subscribe( employees => this.employees = employees  );
    }    
}