import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div> <a [routerLink]="['/']">Home</a> | <a [routerLink]="['/contact']">contact us</a> </div>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
