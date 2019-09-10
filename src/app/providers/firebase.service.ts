import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Venue {
  id?: string;
  name: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private venuesCollection: AngularFirestoreCollection<Venue>;
  venues: Observable<Venue[]>;

  constructor(db: AngularFirestore) {
    this.venuesCollection = db.collection<Venue>('registeredVenues');

    this.venues = this.venuesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getVenues() {
    return this.venues;
  }

  getVenue(id) {
    return this.venuesCollection.doc<Venue>(id).valueChanges();
  }

  updateVenue(venue: Venue, id: string) {
    return this.venuesCollection.doc(id).update(venue);
  }

  addVenue(venue: Venue) {
    return this.venuesCollection.add(venue);
  }

  removeVenue(id) {
    return this.venuesCollection.doc(id).delete();
  }
}
