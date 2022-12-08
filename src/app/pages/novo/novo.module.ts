import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NovoPageRoutingModule } from './novo-routing.module';

import { NovoPage } from './novo.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NovoPage]
})
export class NovoPageModule {}
