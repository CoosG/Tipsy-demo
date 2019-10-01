import { Component, OnInit } from '@angular/core';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {

  image: any;

  constructor(private sanitizer: DomSanitizer) { }

  async takePhoto() {
    const captureImage = await Plugins.Camera.getPhoto({
      quality : 100,
      allowEditing : false,
      source: CameraSource.Camera,
      resultType: CameraResultType.DataUrl
    });

    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(captureImage && (captureImage.dataUrl));
  }


}
