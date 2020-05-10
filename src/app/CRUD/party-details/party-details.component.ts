import { Party } from 'src/app/party';
import { Component, OnInit, Input } from '@angular/core';
import { PartyService } from 'src/app/party.service';
import { PartyListComponent } from 'src/app/CRUD/party-list/party-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.css']
})
export class PartyDetailsComponent implements OnInit {

  id: number;
  party: Party;

  constructor(private route: ActivatedRoute,private router: Router,
    private partyService: PartyService) { }

  ngOnInit() {
    this.party = new Party();

    this.id = this.route.snapshot.params['id'];
    
    this.partyService.getParty(this.id)
      .subscribe(data => {
        console.log(data)
        this.party = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['parties']);
  }
}