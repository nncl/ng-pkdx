import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: ':slug',
    loadChildren: () => import('./pages/slug/slug.module').then(m => m.SlugModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
