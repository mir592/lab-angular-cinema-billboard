import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/cinema.services'
import { ActivatedRoute, Router } from '@angular/router';
import { MyHomeComponentComponent } from '../my-home-component/my-home-component.component';


@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponentComponent implements OnInit {
  moviesid: number;

  constructor(private list: MoviesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
         .subscribe((params) => this.moviesid = Number(params['id']));
  }
  goToHome() {
      this.router.navigate(['/home']);
    }

}
