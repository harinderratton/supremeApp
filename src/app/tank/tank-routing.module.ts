import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankPage } from './tank.page';

const routes: Routes = [
  {
    path: '',
    component: TankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankPageRoutingModule {}
