import { Component, OnInit } from '@angular/core';
import { QuerySnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ObjectIotService } from '../services/object-iot.service';
import { ObjectIot } from '../shared/models/objectIot/object-iot.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  defaultLatMap = 47.20559518968017;
  defaultLongMap = -1.5394109035146895;
  defaultZoomMap = 10;
  listObject: ObjectIot[];

  constructor(private objectIotService: ObjectIotService) {
    this.listObject = [];
    this.objectIotService.getAll().subscribe(documents=>{
      documents.docs.forEach(document => {
        this.listObject.push(document.data());
      });
    });
  }

  ngOnInit(): void {
  }

}
