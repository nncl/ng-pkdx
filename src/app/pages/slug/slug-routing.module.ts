import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlugComponent } from './slug.component';

const routes: Routes = [{ path: '', component: SlugComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlugRoutingModule { }
