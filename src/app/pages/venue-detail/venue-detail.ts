import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Venue, FirebaseService } from "../../providers/firebase.service";

@Component({
  selector: "page-venue-detail",
  templateUrl: "venue-detail.html",
  styleUrls: ["./venue-detail.scss"]
})
export class VenueDetailPage implements OnInit {
  venue: Venue = {
    id: "",
    name: "",
    desc: ""
  };

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    if (id) {
      this.firebaseService.getVenue(id).subscribe(venue => {
        this.venue = venue;
        console.log(venue.name);
      });
    }
  }
}
