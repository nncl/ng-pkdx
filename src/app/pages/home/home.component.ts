import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { HttpParams } from '@angular/common/http';
import { PokemonListItem } from '../../services/pokemon/models';
import { Title } from '@angular/platform-browser';

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
  limit = 12;

  constructor(private title: Title,
              private pokemonService: PokemonService) {
  }

  async ngOnInit() {
    this.title.setTitle('Pokédex');
    await this.get();
  }

  async get() {
    this.loading = true;

    const params = new HttpParams()
      .set('limit', this.limit)
      .set('offset', this.limit * this.page);

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
