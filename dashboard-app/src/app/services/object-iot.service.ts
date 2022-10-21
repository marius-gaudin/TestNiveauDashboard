import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ObjectIot } from '../shared/models/objectIot/object-iot.model';

@Injectable({
  providedIn: 'root'
})
export class ObjectIotService {

  private pathObjectIot = '/ObjectIot';
  objectIotRef: AngularFirestoreCollection<ObjectIot>;

  constructor(private db: AngularFirestore) { 
    this.objectIotRef = db.collection(this.pathObjectIot);
  }

  getAll(): Observable<QuerySnapshot<ObjectIot>> {
    return this.objectIotRef.get();
  }

  create(object: ObjectIot) {
    return this.objectIotRef.add({...object});
  }
}
