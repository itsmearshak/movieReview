import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendingMovies :any;
constructor(private http:HttpClient){}
ngOnInit():void{
  this.getTrendingMovie();
}
getTrendingMovie(){
  this.http.get('http://localhost:4200/assets/data/trending-movie.json').subscribe((movie)=>{
this.trendingMovies=movie; 
console.log(this.trendingMovies);
  })
}
}
