import { Component, OnInit } from "@angular/core";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import {
  MediaFile,
  CaptureError,
  CaptureVideoOptions
} from "@ionic-native/media-capture";
import { File } from "@ionic-native/file/ngx";
import { Storage } from "@ionic/storage";
import { MediaCapture } from "@ionic-native/media-capture/ngx";
import { UploadService } from "../../uploads/shared/upload.service";
import { Upload } from "../../uploads/shared/upload";
import * as _ from "lodash";

const MEDIA_FILES_KEY = "mediaFiles";

@Component({
  templateUrl: "tabs-page.html"
})
export class TabsPage implements OnInit {
  image: any;
  mediaFiles = [];
  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(
    private mediaCapture: MediaCapture,
    private storage: Storage,
    private file: File,
    private upSvc: UploadService
  ) {}

  async takePhoto() {
    const result = await Plugins.Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri // either Base64 or uri (Bace64 is bad for production and performance)
    });

    this.image = result.webPath; // this.domSanitizer.bypassSecurityTrustResourceUrl(result && result.dataUrl);
  }

  takeVideo() {
    const options: CaptureVideoOptions = {
      limit: 1,
      duration: 30
    };
    this.mediaCapture.captureVideo(options).then(
      (res: MediaFile[]) => {
        const capturedFile = res[0];
        const fileName = capturedFile.name;
        const dir = capturedFile["localURL"].split("/");
        dir.pop();
        const fromDirectory = dir.join("/");
        const toDirectory = this.file.dataDirectory;
        this.uploadSingle();

        this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then(
          () => {
            this.storeMediaFiles([{ name: fileName, size: capturedFile.size }]);
          },
          err => {
            console.log("err: ", err);
          }
        );
      },
      (err: CaptureError) => console.error(err)
    );
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

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    const file = this.mediaFiles[0];
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }

  uploadMulti() {
    const files = this.selectedFiles;
    const filesIndex = _.range(files.length);
    _.each(filesIndex, idx => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload);
    });
  }

  ngOnInit() {}
}
