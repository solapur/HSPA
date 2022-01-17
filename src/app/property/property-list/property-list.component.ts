import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  public properties: any;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
     this.http.get('data/property.json').subscribe(
     data=>
     {   this.properties = data;
         console.log(data);
     })
    }

}
