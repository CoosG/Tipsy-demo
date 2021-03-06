import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Venue, FirebaseService } from "../../providers/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "page-venue-detail",
  templateUrl: "venue-detail.html",
  styleUrls: ["./venue-detail.scss"]
})
export class VenueDetailPage implements OnInit {
  venue: Venue = {
    desc: "",
    location: "",
    name: "",
    photo: "",
    times: "",
    id: ""
  };

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private router: Router
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

  navigate() {
    this.router.navigateByUrl("/app/tabs/map");
  }
}
