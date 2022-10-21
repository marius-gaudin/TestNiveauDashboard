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

  getAll(): ObjectIot[] {
    let listObject: ObjectIot[] = [];
    this.objectIotRef.get().subscribe(documents=>{
      documents.docs.forEach(document => {
        let doc = document.data();
        doc.id = document.id;
        listObject.push(doc);
      });
    });
    return listObject;
  }

  create(object: ObjectIot) {
    return this.objectIotRef.add({...object});
  }

  delete(id: string): Promise<void> {
    return this.objectIotRef.doc(id).delete();
  }
}
