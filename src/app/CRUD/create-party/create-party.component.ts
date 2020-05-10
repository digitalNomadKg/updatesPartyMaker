import { Component, OnInit } from '@angular/core';
import { PartyService} from 'src/app/party.service';
import {Party} from 'src/app/party';
import {Router} from '@angular/router';



@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.css']
})
export class CreatePartyComponent implements OnInit {

  party: Party = new Party();
  submitted = false;

  constructor(private partyService: PartyService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.party = new Party();
  }

  save() {
    this.partyService.createParty(this.party)
      .subscribe(data => console.log(data), error => console.log(error));
    this.party = new Party();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/parties']);
  }
}