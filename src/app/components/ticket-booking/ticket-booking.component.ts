import { Component, Input } from '@angular/core';
import { TicketDetails } from 'src/app/ticket-details';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent {
  @Input() movieName: string = '';
  seats: TicketDetails[] = [];
  selectedSeats: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initializeSeats();
  }

  initializeSeats(): void {
    // Initialize with 50 seats
    for (let i = 1; i <= 50; i++) {
      this.seats.push(new TicketDetails(i));
    }
  }

  toggleSeatSelection(seat: TicketDetails): void {
    if (seat.isBooked) return;

    const index = this.selectedSeats.indexOf(seat.seatNumber);
    if (index > -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push(seat.seatNumber);
    }
  }

  bookSeats(): void {
    this.selectedSeats.forEach(seatNumber => {
      const seat = this.seats.find(s => s.seatNumber === seatNumber);
      if (seat) seat.isBooked = true;
    });
    this.selectedSeats = [];
    alert('Seats booked successfully!');
  }
}
