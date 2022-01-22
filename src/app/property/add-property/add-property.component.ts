import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IProperties } from 'src/app/model/IProperties';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
 @ViewChild('Form') addPropertyForm! : NgForm;
 @ViewChild('formTabs') formTabs?: TabsetComponent;

 propertyTypes: Array<string> = ['Housing', 'Apartment', 'Duplex'];
 furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
 sideTypes: Array<string> = ['East', 'West', 'South', 'North']

 propertyView: IProperties = {
   Id: 0,
   Name: '',
   Price: 0,
   SellRent: 0,
   PType : '',
   FType : '',
   BHK : 0,
   BuildArea : 0,
   City : '',
   RTM : 0,
   Description: ''
 };
 constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

  OnSubmit()
  {
   console.log(this.addPropertyForm);
  }
}
