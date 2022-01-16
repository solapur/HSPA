import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  public properties: Array<any> =[
    {
    "Id": 1,
    "Type": "House",
    "Name": "Birla House",
    "Price": 180000
    },
    {
      "Id": 2,
      "Type": "House",
      "Name": "Divya House",
      "Price": 110000
    },
    {
      "Id": 3,
      "Type": "House",
      "Name": "Aarvi House",
      "Price": 120000
    },
    {
      "Id": 4,
      "Type": "House",
      "Name": "Devanshi House",
      "Price": 150000
    },
    {
      "Id": 5,
      "Type": "House",
      "Name": "Biral House",
      "Price": 130000
    },
    {
      "Id": 6,
      "Type": "House",
      "Name": "Mina House",
      "Price": 160000
    },
    {
      "Id": 7,
      "Type": "House",
      "Name": "Ragii House",
      "Price": 150000
    },
    {
      "Id": 8,
      "Type": "House",
      "Name": "Shwata House",
      "Price": 140000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
