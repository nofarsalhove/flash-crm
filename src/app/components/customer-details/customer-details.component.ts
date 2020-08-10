import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer$: Observable<Customer> = null;

  constructor(
    private customerService: CustomerService,
    private activateRouteService: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /* Getting the ID parameter from the URL and sending it to the service
      to get the customer details */
    this.customer$ = this.activateRouteService.params.pipe(
      switchMap(params => this.customerService.getById(params.id))
    );
  }
}
