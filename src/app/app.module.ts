import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesDisplayComponent } from './components/movies-display/movies-display.component';
import { TicketBookingComponent } from './components/ticket-booking/ticket-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesDisplayComponent,
    TicketBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
