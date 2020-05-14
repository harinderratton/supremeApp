import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlePage } from './bottle.page';

const routes: Routes = [
  {
    path: '',
    component: BottlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottlePageRoutingModule {}
