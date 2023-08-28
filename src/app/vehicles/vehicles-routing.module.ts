import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoomBarrierComponent } from './boom-barrier/boom-barrier.component';
import { VehicleInformationComponent } from './vehicle-information/vehicle-information.component';

import { VehiclesInOutInfoComponent } from './vehicles-in-out-info/vehicles-in-out-info.component';

const routes: Routes = [];



@NgModule({
  imports: [
      RouterModule.forChild([
        {path:'vehicleInfo',data:{breadcrumb:'Vehicles Information'},component:VehicleInformationComponent},
          { path: 'vehiclesIn&outInfo', data: { breadcrumb: 'Vehicle in&out Info' }, component: VehiclesInOutInfoComponent },
          { path: 'boomBarrier', data: { breadcrumb: 'boomBarrier' }, component:BoomBarrierComponent }
      ])
  ],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
