import { Component, OnInit } from '@angular/core';
import { Section } from '../shared/models/menu/section.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  listSection: Section[] = [
    {
      "title": "map", 
      "url": ""
    },
    {
      "title": "Objets iot", 
      "url": "/object-iot"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
