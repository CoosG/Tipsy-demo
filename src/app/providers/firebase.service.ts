import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference  } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Venue } from './firebase.service';

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
  private venues: Observable<Venue[]>;

  constructor(private db: AngularFirestore) {
    this.venuesCollection = this.db.collection<Venue>('registeredVenues');

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

  getVenues(): Observable<Venue[]> {
    return this.venues;
  }

  getVenue(id: string): Observable<Venue> {
    return this.venuesCollection.doc<Venue>(id).valueChanges().pipe(
      take(1), // not keeping any unnecessary observables, realtime value not needed in details page
      map(registeredVenue => {
        registeredVenue.id = id;
        return registeredVenue;
      })
    );
  }

  updateVenue(venue: Venue): Promise<void> {
    return this.venuesCollection.doc(venue.id).update({ name: venue.name, desc: venue.desc });
  }

  addVenue(venue: Venue): Promise<DocumentReference> {
    return this.venuesCollection.add(venue);
  }

  removeVenue(id: string): Promise<void> {
    return this.venuesCollection.doc(id).delete();
  }
}
