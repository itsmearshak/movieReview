import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  type = '';
  id = '';
  movies: any;
  movie: any;
  url = 'http://localhost:4200/assets/data/';

  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    this.url += this.type + '.json';
    console.log(this.url);
    this.getMovieDetail();
  }

  getMovieDetail() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
      console.log(this.id);

      let index = this.movies.findIndex((movie: { id: string; }) => {return movie.id.toString() === this.id });
      console.log(index);
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }
}
