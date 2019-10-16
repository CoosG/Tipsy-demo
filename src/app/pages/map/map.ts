import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements AfterViewInit {
  map: any;
  marker: any;
  latitude: any = '';
  longitude: any = '';
  timestamp: any = '';

  @ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;

  constructor(public confData: ConferenceData, public platform: Platform, public geolocation: Geolocation ) {

    // this.platform.ready().then(() => {
    //   const mapOptions = {
    //     center: {lat: 23.2366, lng: 79.3822},
    //     zoom: 7
    //   };
    //   this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //   this.GetLocation();
    // });
  }

    // GetLocation() {
    //   const ref = this;
    //   const watch = this.geolocation.watchPosition();
    //   watch.subscribe((position) => {
    //     const gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //     if (ref.marker == null) {
    //       ref.marker = new google.maps.Marker({
    //         position: gps,
    //         map: ref.map,
    //         title: 'my position'
    //       });
    //     } else {
    //       ref.marker.setPosition(gps);

    //     }
    //     ref.map.panTo(gps);
    //     ref.latitude = position.coords.latitude.toString();
    //     ref.longitude = position.coords.latitude.toString();
    //     ref.timestamp = (new Date(position.timestamp)).toString();
    //   });
    // }

  async ngAfterViewInit() {
    const googleMaps = await getGoogleMaps(
      'AIzaSyDhw6nZUOc_n-CPB9kUcK8IJnPhKfh8Sew'
    );
    this.confData.getMap().subscribe((mapData: any) => {
      const mapEle = this.mapElement.nativeElement;

      const map = new googleMaps.Map(mapEle, {
        center: mapData.find((d: any) => d.center),
        zoom: 16
      });

      mapData.forEach((markerData: any) => {
        const infoWindow = new googleMaps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        const marker = new googleMaps.Marker({
          position: markerData,
          map,
          title: markerData.name
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      googleMaps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });
    });
  }
}

function getGoogleMaps(apiKey: string): Promise<any> {
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps) {
    return Promise.resolve(googleModule.maps);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject('google maps not available');
      }
    };
  });
}
