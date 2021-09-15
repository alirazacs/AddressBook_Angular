import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveAddressComponent } from './save-address/save-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressListingComponent } from './address-listing/address-listing.component';
import { AddressService } from './address.service';

@NgModule({
  declarations: [
    AppComponent,
    SaveAddressComponent,
    AddressListingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
