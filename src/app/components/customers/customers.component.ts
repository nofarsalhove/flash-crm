import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]> = null;
  pageSize: number = 5;
  page: number = 1;
  term = '';

  constructor(private customerService: CustomerService) {
    this.customers$ = this.customerService.getAll();
  }

  ngOnInit(): void {}

  deleteCustomer(id: string, e: MouseEvent) {
    e.preventDefault();
    // Called when the user clicked on the trash icon to delete a customer
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.delete(id);
    }
  }
}
