
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {
  SellRent = 1;
  public properties: any;

  constructor(private route:ActivatedRoute,  private DataService: DataServiceService) {
  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }

    this.DataService.getPropertiesBasedOnSellRent(this.SellRent).subscribe(
    data=>
        {   this.properties = data;
            console.log(data);
            console.log(this.route.snapshot.url.toString());
        }, error=>{
          console.log(error);
        })
    }
 }
