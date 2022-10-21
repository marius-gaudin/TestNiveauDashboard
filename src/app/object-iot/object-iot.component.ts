import { Component, OnInit } from '@angular/core';
import { ObjectIotService } from '../services/object-iot.service';
import { ObjectIot } from '../shared/models/objectIot/object-iot.model';

@Component({
  selector: 'app-object-iot',
  templateUrl: './object-iot.component.html',
  styleUrls: ['./object-iot.component.scss']
})
export class ObjectIotComponent implements OnInit {

  listObject: ObjectIot[];

  constructor(private objectIotService: ObjectIotService) {
    this.listObject = this.objectIotService.getAll();
  }

  delete(id: string) {
    if(id != '' && confirm("Are you sure to delete")) {
      this.objectIotService.delete(id);
      this.listObject = this.objectIotService.getAll();
    }
  }

  ngOnInit(): void {
  }

}
