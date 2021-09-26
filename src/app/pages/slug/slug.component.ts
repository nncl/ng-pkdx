import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonListItem } from '../../services/pokemon/models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-slug',
  templateUrl: './slug.component.html',
  styleUrls: [ './slug.component.scss' ]
})
export class SlugComponent implements OnInit {
  $item: Observable<PokemonListItem> | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private pokemonService: PokemonService) {

    route.params.subscribe(({ slug }) => {
      this.$item = pokemonService.getById(slug);
    });

  }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
