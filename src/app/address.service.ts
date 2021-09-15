import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './address';
@Injectable({
  providedIn: 'root'
})
export class AddressService {


  private baseUrl = "http://localhost:8080/AddressBook_war_exploded/api/addresses";

  constructor(private http: HttpClient) { }

  // GET ALL
  public getAddressList(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseUrl}`)
  }

  // POST DATA
  public saveAddress(address: Address) {
    return this.http.post(`${this.baseUrl}`, address, { responseType: 'text' as 'json' });

  }

  // DELETE 
  public deleteAddress(addressId: number) {
    return this.http.delete(`${this.baseUrl}` + '/' + addressId);

  }

  //GET BY ID
  public findById(addressId:number){
    return this.http.get(`${this.baseUrl}`+'/'+addressId);
  }

  // PUT DATA
  public updateAddress(address:Address,addressId:number){
    return this.http.put(`${this.baseUrl}`+'/'+addressId,address);
  }
}
