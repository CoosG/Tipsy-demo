import { Component, OnInit } from '@angular/core';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {

  image: any;

  constructor() { }

  async takePhoto() {
    const captureImage = await Plugins.Camera.getPhoto({
      quality : 90,
      allowEditing : true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    });

    this.image = captureImage.webPath;
  }


}
