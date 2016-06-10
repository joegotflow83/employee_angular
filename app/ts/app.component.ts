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
        new Employee(3, 'Mark'),
        new Employee(4, 'Tim'),
    ];
    faveEmployee = this.employees[0];

    addEmployee(newEmployee:string) {
        if (newEmployee) {
            this.employees.push(new Employee(5, newEmployee);
            );
        }
    }

    constructor() {
        this.imageUrl = "http://www.trackmyfone.com/blog/wp-content/uploads/2015/10/empower-employee-TMF.jpg";
        this.isValid = false;
        this.isSpecial = true;
    }

    firstName: string;
    lastName: string;
}
