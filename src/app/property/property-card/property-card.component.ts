import { Component, Input, OnInit } from '@angular/core';
import { IProperties } from 'src/app/model/IProperties';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input()
  property!: IProperties;

  @Input()
  hideIcons: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
