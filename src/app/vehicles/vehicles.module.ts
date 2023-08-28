import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';

import { VehiclesInOutInfoComponent } from './vehicles-in-out-info/vehicles-in-out-info.component';
import { BoomBarrierComponent } from './boom-barrier/boom-barrier.component';
import { VehicleInformationComponent } from './vehicle-information/vehicle-information.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../_shared/primeng.module';

@NgModule({
  declarations: [
    VehiclesInOutInfoComponent,
    BoomBarrierComponent,
    VehicleInformationComponent,
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule, FormsModule,
    PrimengModule
  ]
})
export class VehiclesModule { }
