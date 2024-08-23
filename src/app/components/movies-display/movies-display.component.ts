import { Component, OnInit } from '@angular/core';
import { MovieType } from 'src/app/movie-type';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-movies-display',
  templateUrl: './movies-display.component.html',
  styleUrls: ['./movies-display.component.css'],
})
export class MoviesDisplayComponent implements OnInit {
  movie_data: MovieType[] = [];
  selected_movie: MovieType | null = null;
  filter_data: MovieType[] = [];
  booking: boolean = false;  // Add this line to manage the booking state

  constructor(private service: MovieDataService) {}

  ngOnInit(): void {
    this.service.getMovie().subscribe((movie) => {
      this.movie_data = movie;
      this.filter_data = [...this.movie_data]; // Correct placement to initialize filter_data
    });
  }

  searchMovie(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const name = inputElement.value;

    if (name) {
      this.filter_data = this.movie_data.filter((m) =>
        m.movie_name?.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      this.filter_data = [...this.movie_data];
    }
  }

  selectMovie(movie: MovieType) {
    this.selected_movie = movie;  // Set the selected movie when clicked
    this.booking = false;  // Ensure the booking interface is hidden when selecting a new movie
  }

  clearSelection() {
    this.selected_movie = null;  // Clear the selection if needed
    this.booking = false;  // Reset the booking state
  }
}
