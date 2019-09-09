import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './providers/firebase.service';

const firebaseConfig = {
  apiKey: 'AIzaSyAAN4_fzeWnM4PTNA4j-ZoNF_gJBNQk8tc',
  authDomain: 'potch-map-1566554712889.firebaseapp.com',
  databaseURL: 'https://potch-map-1566554712889.firebaseio.com',
  projectId: 'potch-map-1566554712889',
  storageBucket: 'potch-map-1566554712889.appspot.com',
  messagingSenderId: '439304547193',
  appId: '1:439304547193:web:d6d0c67bcd2f4c5fb39da8'
};

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
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
