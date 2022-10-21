import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObjectIotService } from '../services/object-iot.service';

@Component({
  selector: 'app-create-object',
  templateUrl: './create-object.component.html',
  styleUrls: ['./create-object.component.scss']
})
export class CreateObjectComponent implements OnInit {
  
  objectForm: FormGroup;
  showErrors: boolean = false;

  get name() {
    return this.objectForm.get('name');
  }

  get latitude() {
    return this.objectForm.get('latitude');
  }

  get longitude() {
    return this.objectForm.get('longitude');
  }

  get range() {
    return this.objectForm.get('range');
  }

  constructor(private fb: FormBuilder, private objectIotService: ObjectIotService) {
    this.objectForm = this.fb.group({
      name: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      range: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  create(){
    this.objectIotService.create({
      name: this.name?.value,
      latitude: this.latitude?.value,
      longitude: this.longitude?.value,
      range: this.range?.value,
      id: ''
    });
  }

}
