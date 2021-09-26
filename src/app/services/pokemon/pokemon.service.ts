import { Injectable } from '@angular/core';
import { BaseService, HttpOptions } from '../base/base.service';
import { PokemonListItem } from './models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends BaseService<PokemonListItem, PokemonListItem, PokemonListItem> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'pokemon-form', 'v1');
  }

  get(options: HttpOptions = {}): Observable<PokemonListItem[]> {
    return super.get(options)
      .pipe(map((res: any) => res.results));
  }

}
