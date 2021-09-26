import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlugRoutingModule } from './slug-routing.module';
import { SlugComponent } from './slug.component';


@NgModule({
  declarations: [
    SlugComponent
  ],
  imports: [
    CommonModule,
    SlugRoutingModule
  ]
})
export class SlugModule { }
