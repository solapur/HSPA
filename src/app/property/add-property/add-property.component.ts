import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
 @ViewChild('Form') addPropertyForm! : NgForm;
 @ViewChild('formTabs') formTabs?: TabsetComponent;

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
