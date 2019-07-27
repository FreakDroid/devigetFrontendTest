import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { RedditListService } from './service/reddit-list.service';
import {HttpClientModule} from '@angular/common/http';
import { CardDetailComponent } from './card-detail/card-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListCardsComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [RedditListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
