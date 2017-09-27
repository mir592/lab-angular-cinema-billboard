import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/cinema.services'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
   providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {
movies;
  constructor(private list: MoviesService) { }

  ngOnInit() {
    this.movies = this.list.getmovies()
  }

}
