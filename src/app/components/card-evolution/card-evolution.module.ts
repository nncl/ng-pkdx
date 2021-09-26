import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEvolutionComponent } from './card-evolution.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        CardEvolutionComponent
    ],
    exports: [
        CardEvolutionComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CardEvolutionModule { }
