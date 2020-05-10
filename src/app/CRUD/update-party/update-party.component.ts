import { Component, OnInit } from '@angular/core';
import { Party } from 'src/app/party';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from 'src/app/party.service';

@Component({
  selector: 'app-update-party',
  templateUrl: './update-party.component.html',
  styleUrls: ['./update-party.component.css']
})
export class UpdatePartyComponent implements OnInit {

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

  updateParty() {
    this.partyService.updateParty(this.id, this.party)
      .subscribe(data => console.log(data), error => console.log(error));
    this.party = new Party();
    this.gotoList();
  }

  onSubmit() {
    this.updateParty();    
  }

  gotoList() {
    this.router.navigate(['/parties']);
  }
}