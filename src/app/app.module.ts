import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { CreatePartyComponent } from 'src/app/CRUD/create-party/create-party.component';
import { BodyComponent } from 'src/app/Components/body/body.component';
import { PartyDetailsComponent } from 'src/app/CRUD/party-details/party-details.component';
import { PartyListComponent } from 'src/app/CRUD/party-list/party-list.component';
import { UpdatePartyComponent } from 'src/app/CRUD/update-party/update-party.component';
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
