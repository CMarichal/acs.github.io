import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  db(table) {
    return firebase.database().ref(table);
  }
  create(table, data) {
    this.db(table).push(data);
  }
  remove(segment) {
    return firebase.database().ref(segment).remove();
  }
}
