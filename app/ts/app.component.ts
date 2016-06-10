import {Component} from 'angular2/core';
import {Employee} from './Employee';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html'
})

export class AppComponent {
    title = 'Employees';
    employees = [
        new Employee(1, 'Tom'),
        new Employee(2, 'John'),
        new Employee(2, 'Mark'),
        new Employee(2, 'Tim'),
    ];
    faveEmployee = this.employees[0];
}
