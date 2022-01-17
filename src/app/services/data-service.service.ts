import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getPropertiesBasedOnSellRent(sellRent: number){

    if(sellRent === 1)
    {
       return this.http.get('data/sellproperty.json');
    }
    else
    {
        return this.http.get('data/rentproperty.json');
    }

  }

  getAllProperties()
  {
     return this.http.get('data/property.json');
  }
}
