import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { EvolutionItem } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService extends BaseService<EvolutionItem, EvolutionItem, EvolutionItem> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'evolution-chain', 'v2');
  }

}
