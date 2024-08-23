export class TicketDetails {
    seatNumber: number;
    isBooked: boolean;
  
    constructor(seatNumber: number, isBooked: boolean = false) {
      this.seatNumber = seatNumber;
      this.isBooked = isBooked;
    }
  
}
