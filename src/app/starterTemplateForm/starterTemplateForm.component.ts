import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;

    constructor() { }

    ngOnInit() { 
        this.customer = {
            firstName: 'Fred Template',
            lastName: 'Doe',
            address: '123 Main',
            city: 'Calgary',
            province: 'Alberta',
            country: 'Canada',
            postalCode: 'A1A 1A1',
            phoneNumber: '111-222-3333',
            email: 'jdoe@email.com'
        };
    }

    onSubmit() {
        this.message = 'You typed:' + "\n" +
        'First Name: ' + this.customer.firstName + "\n" +
        'Last Name: ' + this.customer.lastName + "\n" +
        'Address: ' + this.customer.address + "\n" +
        'City: ' + this.customer.city + "\n" +
        'Province: ' + this.customer.province + "\n" +
        'Country: ' + this.customer.country + "\n" +
        'Postal Code: ' + this.customer.postalCode + "\n" +
        'Phone Number: ' + this.customer.phoneNumber + "\n" +
        'Email: ' + this.customer.email;
    }

}