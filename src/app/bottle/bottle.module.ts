import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottlePageRoutingModule } from './bottle-routing.module';

import { BottlePage } from './bottle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottlePageRoutingModule
  ],
  declarations: [BottlePage]
})
export class BottlePageModule {}
