import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListingComponent } from './address-listing/address-listing.component';
import { SaveAddressComponent } from './save-address/save-address.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'addresses',
    pathMatch: 'full',
  },
  { 
    path: 'addresses',
    children: [
      {
        path: '',
        component: AddressListingComponent
      },
      {
        path: 'save',
        component: SaveAddressComponent

      },
      {
        path: 'update/:id',
        component: SaveAddressComponent

      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
