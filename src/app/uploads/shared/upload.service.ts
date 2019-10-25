import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Upload } from './upload';
import * as firebase from 'firebase';
import { Users } from '../shared/users';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private db: AngularFireDatabase,
    private httpC: HttpClient,
    private user: Users)
    { }

  private basePath = '/uploads';
  uploads: AngularFireList<Upload[]>;

  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    // potch-map-1566554712889.appspot.com/uploads/4k-night-sky-wallpaper.jpg

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        storageRef.child(this.basePath + '/' + upload.file.name).getDownloadURL().then(res => {
          upload.url = res;
          console.log(upload.url);
        });
        upload.name = upload.file.name;
        this.saveFileDataA(upload);
      }
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

    // writes to armand db
  private saveFileDataA(upload: Upload) {
    this.httpC.post('http://tipsyws/api/user/addvideo',
    `{
      "vid_furl": "` + upload.url + `",
      "u_id": "` + this.user.u_Email + `",
      "vid_likes": ` + 0 + `,
      "l_id": " ",
    }`
    ).subscribe((res) => {
      console.log(res);
    }) ;
  }


  // Delete uploaded storage
  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
    .then( () => {
      this.deleteFileStorage(upload.name);
    })
    .catch(error => console.log(error));
  }

  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }

}
