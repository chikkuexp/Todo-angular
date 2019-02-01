import { Component } from '@angular/core';
import { FavouriteEventValue } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'First Angular App';

  post = {
    "title" : "title",
    "isFavorite" : true
  }

  onChangeFavouriteButton(isFavorite: FavouriteEventValue){
    console.log('Favourite button changed: ', isFavorite);
  }
}
