import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference
} from "angularfire2/firestore";

import { AngularFireDatabase } from "angularfire2/database";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "angularfire2/storage";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { Venue } from "./firebase.service";

export interface Venue {
  id?: any;
  name: any;
  desc: any;
  location: any;
  photo: any;
  times: any;
}

export interface User {
  id?: string;
  username: string;
  password: string;
  name: string;
  status: string;
  story: any;
  location: any;
  profilePic: any;
}

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  private venuesCollection: AngularFirestoreCollection<Venue>;
  private venues: Observable<Venue[]>;

  constructor(
    private db: AngularFirestore,
    private fdb: AngularFireDatabase,
    private afStorage: AngularFireStorage
  ) {
    this.venuesCollection = this.db.collection<Venue>("registeredVenues");

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
    return this.venuesCollection
      .doc<Venue>(id)
      .valueChanges()
      .pipe(
        take(1), // not keeping any unnecessary observables, realtime value not needed in details page
        map(registeredVenue => {
          registeredVenue.id = id;
          return registeredVenue;
        })
      );
  }

  updateVenue(venue: Venue): Promise<void> {
    return this.venuesCollection
      .doc(venue.id)
      .update({ name: venue.name, desc: venue.desc });
  }

  addVenue(venue: Venue): Promise<DocumentReference> {
    return this.venuesCollection.add(venue);
  }

  removeVenue(id: string): Promise<void> {
    return this.venuesCollection.doc(id).delete();
  }

  getFiles() {
    const ref = this.fdb.list("files");
    return ref.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  uploadToStorage(information): AngularFireUploadTask {
    const newName = `${new Date().getTime()}.txt`;

    return this.afStorage.ref(`files/${newName}`).putString(information);
  }

  storeInfoToDatabase(metainfo) {
    const toSave = {
      created: metainfo.timeCreated,
      url: metainfo.downloadURLs[0],
      fullPath: metainfo.fullPath,
      contentType: metainfo.contentType
    };
    return this.fdb.list("files").push(toSave);
  }

  deleteFile(file) {
    const key = file.key;
    const storagePath = file.fullPath;

    const ref = this.fdb.list("files");

    ref.remove(key);
    return this.afStorage.ref(storagePath).delete();
  }
}
