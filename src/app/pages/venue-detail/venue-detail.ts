import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { Venue, FirebaseService } from '../../providers/firebase.service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'page-venue-detail',
  templateUrl: 'venue-detail.html',
  styleUrls: ['./venue-detail.scss'],
})
export class VenueDetailPage implements OnInit {
  venue: Venue = {
    name: 'test',
    desc: 'test'
  };

  venueId = null;

  constructor(
    // private dataProvider: ConferenceData,
    // private router: Router,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private loadingController: LoadingController,
    private nav: NavController,
  ) {}

  ngOnInit(): void {
    this.venueId = this.route.snapshot.params['id'];
    if (this.venueId) {
      this.loadVenue();
    }
  }

  async loadVenue() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.firebaseService.getVenue(this.venueId).subscribe(res => {
      loading.dismiss();
      this.venue = res;
    });
  }

  async saveVenue() {
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();

    if (this.venueId) {
      this.firebaseService.updateVenue(this.venue, this.venueId).then(() => {
        loading.dismiss();
        this.nav.back();
      });
    } else {
      this.firebaseService.addVenue(this.venue).then(() => {
        loading.dismiss();
        this.nav.back();
      });
    }
  }

  /*ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const venueId = this.route.snapshot.paramMap.get('venueId');
      if (data && data.venues) {
        for (const venue of data.venues) {
          if (venue && venue.id === venueId) {
            this.venue = venue;
            break;
          }
        }
      }
    });
  }*/
}
