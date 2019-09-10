import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afd: AngularFireDatabase) { }

  getVenues() {
    return this.afd.list('/registeredVenues/');
  }

  addVenues(id) {
    return this.afd.list('/registeredVenues/').push(id);
  }

  removeVenues(id) {
    return this.afd.list('/registeredVenues/').remove(id);
  }
}
