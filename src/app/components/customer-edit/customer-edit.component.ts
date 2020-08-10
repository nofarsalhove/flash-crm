import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    isActive: false,
    registered: new Date()
  };

  constructor(
    private customerService: CustomerService,
    private activateRouteService: ActivatedRoute,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    /* Getting the ID parameter from the URL and sending it to the service
      to get the customer details, and when we get the customer's details we put his details in the customer object to show hit details in the form */
    this.activateRouteService.params
      .pipe(
        switchMap(params => this.customerService.getById(params.id)),
        take(1)
      )
      .subscribe(customer => (this.customer = customer));
  }

  async onCustomerUpdate({
    value,
    valid
  }: {
    value: Customer;
    valid: boolean;
  }) {
    /*If the form is valid, we update the customer's details in the DB by sending the form's inputs.nav
      And then we navigate the user to the customers page*/
    if (valid) {
      await this.customerService.update(this.customer.id.toString(), value);
      this.routerService.navigate(['/customers']);
    }
  }
}
