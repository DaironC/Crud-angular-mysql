import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/Game';
import { Router, ActivatedRoute, Route } from '@angular/router';

// service
import { GamesService } from '../../services/games.service';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') class = 'row';

  game: Game = {

    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date
  };

  edit = false;

  constructor( private gameServices: GamesService, private route: Router, private activedRoute: ActivatedRoute  ) { }

  ngOnInit() {
    const parms =  this.activedRoute.snapshot.params;
    if (parms.id) {
      this.gameServices.getGAme(parms.id)
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;

          },
          err => console.log(err)
        );
    }
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;

    this.gameServices.saveGAme(this.game)
      .subscribe (
        res => {
          console.log(res);
          this.route.navigate(['/games']);
        },
        err => console.error(err)
      );

  }

  updateGame() {
    delete this.game.created_at;

    this.gameServices.updateGame(this.game.id, this.game)
        .subscribe(
          res => {
            console.log(res);
          },
          err => console.log(err)
        );
  }

}
