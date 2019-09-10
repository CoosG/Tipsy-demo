import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { Venue, FirebaseService } from '../../providers/firebase.service';

@Component({
  selector: 'page-venue-list',
  templateUrl: 'venue-list.html',
  styleUrls: ['./venue-list.scss'],
})
export class VenueListPage implements OnInit {

  venues: any[] = [];
  venues1: Venue[];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.firebaseService.getVenues().subscribe(res => {
      this.venues1 = res;
    });
  }

  remove(item) {
    this.firebaseService.removeVenue(item.id);
  }

  ionViewDidEnter() {
    this.confData.getVenues().subscribe((venues: any[]) => {
      this.venues = venues;
    });
  }

  goToVenueTwitter(venue: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${venue.twitter}`,
      '_blank'
    );
  }

  async openVenueShare(venue: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + venue.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + venue.twitter
            );
            if (
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + venue.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(venue: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + venue.name,
      buttons: [
        {
          text: `Email ( ${venue.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + venue.email);
          }
        },
        {
          text: `Call ( ${venue.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + venue.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
