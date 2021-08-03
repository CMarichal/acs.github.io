import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(
    private database : AngularFireDatabase
  ) {
    
   }
   
  /**
   * Return a reference to the database
   */
  get db() {
    return this.database;
  }

  addOne(table: string, object: any)
  {

  }

  add(table: string, list)
  {

  }


}
