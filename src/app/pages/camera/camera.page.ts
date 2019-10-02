import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

@Component({
  selector: 'camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  image: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  async takePhoto() {
    const { Camera } = Plugins;

    const result = await Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64 // either Base64 or uri (Bace64 is bad for production and performance)
    });

    this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(result && result.dataUrl);
  }

  ngOnInit() {
  }

}
