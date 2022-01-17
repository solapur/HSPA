
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  public properties: any;

  constructor(private DataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.DataService.getAllProperties().subscribe(
    data=>
        {   this.properties = data;
            console.log(data);
        }, error=>{
          console.log(error);
        })
    }
 }
