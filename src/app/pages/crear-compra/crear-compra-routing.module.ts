import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCompraPage } from './crear-compra.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCompraPageRoutingModule {}
