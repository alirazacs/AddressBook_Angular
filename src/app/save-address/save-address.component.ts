import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-save-address',
  templateUrl: './save-address.component.html',
  styleUrls: ['./save-address.component.css']
})
export class SaveAddressComponent implements OnInit {

  cities: string[] = ['Lahore', 'Faisalabad', 'Gujrat'];

  constructor(private myBuilder: FormBuilder, private addressService: AddressService, private router: Router, private route: ActivatedRoute) { }

  addressForm = this.myBuilder.group({
    id:[''],
    name: [''],
    email: [''],
    gender: ['male'],
    city: [''],
  })

  submitForm(addressForm: any) {
    this.route.params.subscribe((data) => {
      if (data['id']) {
        console.log(addressForm.value);
        console.log(data['id']);
        let res = this.addressService.updateAddress(addressForm.value, data['id']);
        res.subscribe((res) => {
          console.log(res);
          this.router.navigate(['addresses'])
            .then(() => {
              window.location.reload();
            });
        });
      }
      else {
        let res = this.addressService.saveAddress(addressForm.value);
        res.subscribe(() => {
          this.router.navigate(['addresses'])
            .then(() => {
              window.location.reload();
            });
        });

      }
    })
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data['id']) {
        let res = this.addressService.findById(data['id']);
        res.subscribe((data) => {
          console.log(data);
          this.addressForm = this.myBuilder.group({
            id:[data['id']],
            name: [data['name']],
            email: [data['email']],
            gender: [data['gender']],
            city: [data['city']],
          })
        })
      }
    })
  }

}

