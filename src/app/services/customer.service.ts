import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Customer } from '../interfaces/customer';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// This service deals with customers - create customers/update/delete/get customers
export class CustomerService {
  private _customerRef: AngularFirestoreCollection<Customer>;
  coustomers$: Observable<Customer[]> = null;

  constructor(private afs: AngularFirestore) {
    // reference to Customers collection
    this._customerRef = this.afs.collection('customers');

    this.coustomers$ = this._customerRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }

  add(customer: Customer) {
    this._customerRef.add(customer);
  }

  getAll() {
    return this._customerRef.valueChanges({ idField: 'id' });
  }

  // Getting the customer details according to ID
  getById(id: string): Observable<Customer> {
    return this._customerRef
      .doc<Customer>(id)
      .valueChanges()
      .pipe(
        map(doc => {
          // If the customer exist - return his details include the ID
          if (doc) {
            return { id, ...doc };
          }
          // If the customer not exist - return null
          return null;
        })
      );
  }

  update(id: string, value: Customer) {
    return this._customerRef.doc<Customer>(id).update(value);
  }

  delete(id: string) {
    this._customerRef.doc(id).delete();
  }
}
