import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  customerForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  };

  constructor(
    private customerService: CustomerService,
    private routerService: Router
  ) {}

  ngOnInit(): void {}

  // Create new customer
  onSubmit({ value, valid }: { value: Customer; valid: boolean }) {
    /* Create a customer object with the values we recieved from the user,
      and adding it the field that says if the user is active and the current register day */
    if (valid) {
      let customer = {
        ...value,
        isActive: true,
        registered: new Date()
      };
      this.customerService.add(customer);
      this.routerService.navigate(['/customers']);
    }
  }

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: ''
    });
  }
}
