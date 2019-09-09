import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-venue-detail',
  templateUrl: 'venue-detail.html',
  styleUrls: ['./venue-detail.scss'],
})
export class VenueDetailPage {
  venue: any;

  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
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
  }
}
