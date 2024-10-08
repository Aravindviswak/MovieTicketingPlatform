import { Injectable } from '@angular/core';
import { MovieType } from '../movie-type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  constructor() {}

  movie_data: MovieType[] = [
    {
      movie_id: 1001,
      movie_name: 'Deadpool',
      movie_description: 'Movie of Deadpool & Wolverine',
      movie_ticket_price: 50,
      movie_resources:'https://en.wikipedia.org/wiki/Deadpool_%26_Wolverine',
      movie_image:
        'https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },
    {
      movie_id: 1002,
      movie_name: 'Kalki',
      movie_description: 'Movie of Kalki2829',
      movie_ticket_price: 70,
      movie_resources: 'https://en.wikipedia.org/wiki/Kalki_2898_AD',
      movie_image:
        'https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },

    {
      movie_id: 1003,
      movie_name: 'Bahubali',
      movie_description: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy 
                      Release date: 10 July 2015 (India)
                      Director: S. S. Rajamouli
                      Producers: Shobu Yarlagadda, Kovelamudi Raghavendra Rao, Prasad Devineni
                      Budget: 180 crores INR (2015)
                      Languages: Telugu, Tamil
                      Sequel: Baahubali 2: The Conclusion
`,
      movie_ticket_price: 80,
      movie_resources:'https://en.wikipedia.org/wiki/Baahubali:_The_Beginning',
      movie_image:
        'https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg',
    },
    {
      movie_id: 1004,
      movie_name: 'Jalsa',
      movie_description: 'Movie of Jalsa',
      movie_ticket_price: 10,
      movie_resources:'https://en.wikipedia.org/wiki/Jalsa',
      movie_image:
        'https://m.media-amazon.com/images/M/MV5BMzBhNDk0ZTgtYTI5My00MGU2LWEzNDAtOGRhMTk3ZDdjMjE0XkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_FMjpg_UX1000_.jpg',
    },
    {
      movie_id: 1005,
      movie_name: 'Devara',
      movie_description: 'Movie of Devara',
      movie_ticket_price: 40,
      movie_resources:'https://en.wikipedia.org/wiki/Devara:_Part_1',
      movie_image:
        'https://m.media-amazon.com/images/M/MV5BYmYyYzZkZTEtOGNjYy00ZWUyLWFiYzYtYjViMzU1ZDk4ODhiXkEyXkFqcGdeQXVyNzI4NjYyMzk@._V1_.jpg',
    },

    {
      movie_id: 1006,
      movie_name: 'Pushpa',
      movie_description: 'Movie of Pushpa',
      movie_ticket_price: 47,
      movie_resources:'https://en.wikipedia.org/wiki/Pushpa:_The_Rise',
      movie_image:
        'https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg',
    },
  ];

  getMovie(): Observable<MovieType[]> {
    return of(this.movie_data);
  }
}
