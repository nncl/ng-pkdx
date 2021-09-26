import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlugRoutingModule } from './slug-routing.module';
import { SlugComponent } from './slug.component';
import { CardModule } from '../../components/card/card.module';


@NgModule({
  declarations: [
    SlugComponent
  ],
    imports: [
        CommonModule,
        SlugRoutingModule,
        CardModule
    ]
})
export class SlugModule { }
