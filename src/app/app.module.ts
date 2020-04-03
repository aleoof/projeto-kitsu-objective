import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailModalComponent } from './character-detail-modal/character-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
