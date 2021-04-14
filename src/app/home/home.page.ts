import { Component, OnInit } from '@angular/core';
import {MovieService} from '../Services/movie.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  movies: any = [];
  constructor(private movieService:MovieService) {}

  ngOnInit(){
    // .subscribe makes it async so the pages doesnt freeze while looking for data
    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
        // can inspect page to see api data with console.log
        console.log(this.movies);
      }
    );
  }

}
