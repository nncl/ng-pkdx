import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonListItem } from '../../services/pokemon/models';
import { Location, TitleCasePipe } from '@angular/common';
import { EvolutionItem } from '../../services/evolution/models';
import { EvolutionService } from '../../services/evolution/evolution.service';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slug',
  templateUrl: './slug.component.html',
  styleUrls: [ './slug.component.scss' ]
})
export class SlugComponent implements OnInit {
  $item: Observable<PokemonListItem> | undefined;
  $evolution: Observable<EvolutionItem> | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private title: Title,
              private titleCasePipe: TitleCasePipe,
              private pokemonService: PokemonService,
              private evolutionService: EvolutionService) {

    route.params.subscribe(({ slug }) => {
      this.$item = pokemonService.getById(slug)
        .pipe(map((res: any) => {
          this.title.setTitle('Pokédex - ' + this.titleCasePipe.transform(res.name));
          this.$evolution = evolutionService.getById(res.id?.toString());
          return res;
        }));
    });
  }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
