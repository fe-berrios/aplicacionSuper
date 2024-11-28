import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCompraPageRoutingModule } from './crear-compra-routing.module';

import { CrearCompraPage } from './crear-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCompraPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearCompraPage]
})
export class CrearCompraPageModule {}
