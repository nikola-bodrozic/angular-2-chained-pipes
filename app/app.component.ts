import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
 <a [routerLink]="['/']">Home</a> |  <a [routerLink]="['/empl']">worker list</a>  | <a [routerLink]="['/contact']">contact us</a><br>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
