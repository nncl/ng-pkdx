import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { HttpParams } from '@angular/common/http';
import { PokemonListItem } from '../../services/pokemon/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  placeholders = Array(12).fill('');

  items: PokemonListItem[] = [];
  loading = true;
  page = 0;

  constructor(private pokemonService: PokemonService) {
  }

  async ngOnInit() {
    await this.get();
  }

  async get() {
    this.loading = true;

    const params = new HttpParams()
      .set('limit', 12)
      .set('offset', 12 * this.page);

    try {
      const res = await this.pokemonService.get({ params }).toPromise();
      this.items = this.items.concat(res);
    } catch (e) {
      alert('Error loading pokémons');
    } finally {
      this.loading = false;
    }
  }

  async loadMore() {
    if (this.loading) {
      return;
    }

    this.page++;
    await this.get();
  }

}
