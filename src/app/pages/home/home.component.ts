import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonListItem } from '../../services/pokemon/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  placeholders = Array(12).fill('');
  $items: Observable<PokemonListItem[]>;

  constructor(private pokemonService: PokemonService) {
    this.$items = pokemonService.get();
  }

  ngOnInit(): void {
  }

}
