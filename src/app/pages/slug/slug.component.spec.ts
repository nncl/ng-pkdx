import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugComponent } from './slug.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TitleCasePipe } from '@angular/common';
import { CardModule } from '../../components/card/card.module';

describe('SlugComponent', () => {
  let component: SlugComponent;
  let fixture: ComponentFixture<SlugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlugComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        CardModule
      ],
      providers: [
        TitleCasePipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
