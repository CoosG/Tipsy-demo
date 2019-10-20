import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media} from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [AppComponent],
  providers: [
    InAppBrowser,
    SplashScreen,
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    Geolocation,
    MediaCapture,
    Media,
    File
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
