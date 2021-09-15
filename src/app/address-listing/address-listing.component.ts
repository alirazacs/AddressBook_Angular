import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-listing',
  templateUrl: './address-listing.component.html',
  styleUrls: ['./address-listing.component.css']
})
export class AddressListingComponent implements OnInit {

  addressList: Address[];

  constructor(private addressService: AddressService,private router:Router) { }

  // FETCH ALL DATA 
  ngOnInit() {
    let res = this.addressService.getAddressList();
    res.subscribe((data) => this.addressList = data);
  }

  public deleteAddress(addressId: number) {

    let res = this.addressService.deleteAddress(addressId);
    res.subscribe((data:any) =>{
      this.addressList = data;
      
    });
    // this.router.navigate(['/addresses']);
  }




}
