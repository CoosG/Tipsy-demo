import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Injectable({
  providedIn: 'root'
})
export class GfencesService {

  constructor(private geolocation: Geolocation) {}

    calculateDistance() {
    // tslint:disable-next-line: max-line-length
    const arrBusiness: number[][] = [[-26.69406, 27.094916], [-26.694851, 27.095049], [-26.699972, 27.093373], [-26.693731, 27.094870], [-26.710771, 27.095100], [-26.708872, 27.097950], [-26.686360, 27.091944], [-26.689972, 27.079924]];
    let arrBusinessName: string[] = new Array();
    let myLat = 0;
    let myLong = 0;
    let lLat = 0;
    let lLong = 0;
    let dis = 0;
    let loc = '';

    arrBusinessName = ['MVG', 'Burbouns', 'Music Cafe', 'Texas', 'Mystic boer', 'Impala', 'Draak', 'Mont Serrat'];


    this.geolocation.getCurrentPosition().then((resp) => {
      myLat = resp.coords.latitude;
      console.log(myLat);
      myLong = resp.coords.longitude;
      console.log(myLong);
    }).catch((error) => {
       console.log('Error getting location', error);
    });

    for(let counter: number = 0; counter < 8; counter++) {
      lLat = arrBusiness[counter][0];
      console.log(lLat);
      lLong = arrBusiness[counter][1];
      console.log(lLong);
      dis = this.getDistanceFromLatLonInKm(myLat, myLong, lLat, lLong);

      dis < 0.7 ?  loc = arrBusinessName[counter] : loc = '';

      }

      console.log(loc);
      return loc;
    }

    getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1);
      var a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var d = R * c; // Distance in km
          console.log(d);
          return d;
      }

      deg2rad(deg) {
        return deg * (Math.PI/180)
      }
    }

     /*distance(lat1, lon1, lat2, lon2) {
      let p = 0.017453292519943295;    // Math.PI / 180
      let c = Math.cos;
      let a = 0.5 - c((lat2 - lat1) * p)/2 +
              c(lat1 * p) * c(lat2 * p) *
              (1 - c((lon2 - lon1) * p))/2;

      console.log((12742 * Math.asin(Math.sqrt(a))) / 1000);
      return (12742 * Math.asin(Math.sqrt(a))) / 1000; // 2 * R; R = 6371 km
    }*/

    /*getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1);
      var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c; // Distance in km
      console.log(d/1000);
      return d/1000;
    }

    deg2rad(deg) {
      return deg * (Math.PI/180)
    }*/

    /*Distance(lat1: number, lat2: number, long1: number, long2: number){
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km

    console.log(dis);
    return dis;
  }*/


