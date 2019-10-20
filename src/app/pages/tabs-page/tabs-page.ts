import { Component, OnInit } from '@angular/core';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { User, FirebaseService } from '../../providers/firebase.service';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { MediaCapture } from '@ionic-native/media-capture/ngx';

const MEDIA_FILES_KEY = 'mediaFiles';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage implements OnInit {
  image: any;
  mediaFiles = [];

  constructor(
    private mediaCapture: MediaCapture,
    private storage: Storage,
    private file: File,
  ) {}

  async takePhoto() {

    const result = await Plugins.Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri // either Base64 or uri (Bace64 is bad for production and performance)
    });

    this.image = result.webPath ; // this.domSanitizer.bypassSecurityTrustResourceUrl(result && result.dataUrl);
  }

  takeVideo() {
    const options: CaptureVideoOptions = {
      limit: 1,
      duration: 30
    };
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
      const capturedFile = res[0];
      const fileName = capturedFile.name;
      const dir = capturedFile['localURL'].split('/');
      dir.pop();
      const fromDirectory = dir.join('/');
      const toDirectory = this.file.dataDirectory;

      this.file.copyFile(fromDirectory , fileName , toDirectory , fileName).then(() => {
        this.storeMediaFiles([{name: fileName, size: capturedFile.size}]);
      }, err => {
        console.log('err: ', err);
      });
          },
    (err: CaptureError) => console.error(err));
  }

  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    });
  }

  ngOnInit() {
  }
}
