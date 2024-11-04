import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialesPage } from './historiales.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialesPageRoutingModule {}
