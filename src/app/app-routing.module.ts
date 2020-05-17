import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartyListComponent } from './CRUD/party-list/party-list.component';
import { UpdatePartyComponent } from './CRUD/update-party/update-party.component';
import { PartyDetailsComponent } from './CRUD/party-details/party-details.component';
import { CreatePartyComponent } from './CRUD/create-party/create-party.component';

const routes: Routes = [
  { path: '', redirectTo: 'party', pathMatch: 'full' },
  { path: 'parties', component: PartyListComponent },
  { path: 'add', component: CreatePartyComponent },
  { path: 'update/:id', component: UpdatePartyComponent },
  { path: 'details/:id', component: PartyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
