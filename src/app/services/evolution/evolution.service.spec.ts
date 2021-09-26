import { TestBed } from '@angular/core/testing';

import { EvolutionService } from './evolution.service';
import { HttpClientModule } from '@angular/common/http';

describe('EvolutionService', () => {
  let service: EvolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(EvolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
