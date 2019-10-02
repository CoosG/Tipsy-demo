import { Component, OnInit } from '@angular/core';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { User, FirebaseService } from '../../providers/firebase.service';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage implements OnInit {
  image: any;

  constructor() {}

  async takePhoto() {

    const result = await Plugins.Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri // either Base64 or uri (Bace64 is bad for production and performance)
    });

    this.image = result.webPath ; // this.domSanitizer.bypassSecurityTrustResourceUrl(result && result.dataUrl);
  }

  ngOnInit() {
  }
}
