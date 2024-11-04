import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialesPageRoutingModule } from './historiales-routing.module';

import { HistorialesPage } from './historiales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialesPageRoutingModule
  ],
  declarations: [HistorialesPage]
})
export class HistorialesPageModule {}
