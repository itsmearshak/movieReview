import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendingMovies :any;
  theatreMovies:any;
  popularMovies:any;
constructor(private http:HttpClient , private router :Router){}
ngOnInit():void{
  this.getTrendingMovie();
  this.getTheaterMovie();
  this.getPopularMovie();
}
getTrendingMovie(){
  this.http.get('http://localhost:4200/assets/data/trending-movie.json').subscribe((movie)=>{
this.trendingMovies=movie; 
console.log(this.trendingMovies);
  })
}
getTheaterMovie(){
  this.http.get('http://localhost:4200/assets/data/theatre-movie.json').subscribe((movie)=>{
this.theatreMovies=movie;
  })
}
getPopularMovie(){
  this.http.get('http://localhost:4200/assets/data/popular-movie.json').subscribe((movie)=>{
this.popularMovies=movie;
console.log(this.popularMovies);
  })
}
gotoMovie(type:string ,id :string){
this.router.navigate(['movie',type ,id]);
}
}
