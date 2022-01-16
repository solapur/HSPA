import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  public Property: any ={
  "Id": 1,
  "Type": "House",
  "Name": "Biral House",
  "Price": 120000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
