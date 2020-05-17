import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CreatePartyComponent } from './CRUD/create-party/create-party.component';
import { BodyComponent } from './Components/body/body.component';
import { PartyDetailsComponent } from './CRUD/party-details/party-details.component';
import { PartyListComponent } from './CRUD/party-list/party-list.component';
import { UpdatePartyComponent } from './CRUD/update-party/update-party.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreatePartyComponent,
    BodyComponent,
    PartyDetailsComponent,
    PartyListComponent,
    UpdatePartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
