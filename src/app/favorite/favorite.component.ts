import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.click.emit({"isFavourite" : this.isFavorite});
  }
}

export interface FavouriteEventValue {
  isFavorite : boolean
}