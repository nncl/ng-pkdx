import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
class BService extends BaseService<any, any, any> {
  constructor(http: HttpClient) {
    super(http, '', 'v1');
  }
}

export interface Item {
  name: string;
  url: string;
}

describe('BaseService', () => {
  let service: BaseService<Item, Item, Item>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        {
          provide: BaseService, useClass: BService
        }
      ]
    });
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
