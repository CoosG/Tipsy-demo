import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venue, FirebaseService } from '../../providers/firebase.service';

@Component({
  selector: 'page-venue-detail',
  templateUrl: 'venue-detail.html',
  styleUrls: ['./venue-detail.scss'],
})
export class VenueDetailPage implements OnInit {

  venue: Venue = {
    id: '',
    name: '',
    desc: ''
  };

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.firebaseService.getVenue(id).subscribe((venue) => {
        this.venue = venue;
        console.log(venue.name);
      });
    }
  }

  /*async loadVenue() {
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
  }/*

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
