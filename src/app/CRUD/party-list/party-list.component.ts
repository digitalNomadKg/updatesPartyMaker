import { PartyDetailsComponent } from 'src/app/CRUD/party-details/party-details.component';
import { Observable } from "rxjs";
import { PartyService } from 'src/app/party.service';
import { Party } from 'src/app/party';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {
  parties: Observable<Party[]>;

  constructor(private partyService: PartyService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.parties = this.partyService.getPartiesList();
  }

  deleteParty(id: number) {
    this.partyService.deleteParty(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  partyDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateParty(id: number) {
    this.router.navigate(['update', id]);
  }
}