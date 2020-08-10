import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { LoginGoogleDirective } from './directives/login-google.directive';
import { LogoutDirective } from './directives/logout.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidenavComponent,
    CustomersComponent,
    PageHeaderComponent,
    NewCustomerComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    PageNotFoundComponent,
    ParagraphCapitalPipe,
    FilterArrayPipe,
    LoginGoogleDirective,
    LogoutDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
