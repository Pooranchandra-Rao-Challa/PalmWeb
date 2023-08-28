import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { VehicleInfo } from 'src/app/demo/api/security';
import { SecurityService } from 'src/app/demo/service/security.service';

export interface ITableHeader {
  field: string;
  header: string;
  label: string;
}

@Component({
  selector: 'app-vehicles-in-out-info',
  templateUrl: './vehicles-in-out-info.component.html',
  styles: []
})

export class VehiclesInOutInfoComponent {
  dialog: boolean = false;
  @ViewChild('filter') filter!: ElementRef;
  vehicleForm!: FormGroup;
  submitLabel!: string;
  screens: string[] = [];
  vehicleinfo: VehicleInfo[];

  constructor(private formbuilder: FormBuilder, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.vehicleForm = this.formbuilder.group({
      id: [''],
      vehicleId: new FormControl('', [Validators.required]),
      boomBarrierId: new FormControl('', [Validators.required]),
      reportingTime: new FormControl('', [Validators.required]),
      carrierWeight: new FormControl('', [Validators.required]),
      tareWeight: new FormControl('', [Validators.required]),
      netWeight: new FormControl('', [Validators.required]),
      fuelQuantity: new FormControl('', [Validators.required]),
    });
    this.initVehicleInfo();
  }
  initVehicleInfo() {
    this.securityService.getVehicleInfo().then((data) => {
      this.vehicleinfo = data;
    });
  }


  headers: ITableHeader[] = [
    { field: 'id ', header: 'id', label: 'ID' },
    { field: 'vehicleId ', header: 'vehicleId', label: 'Vehicle Id' },
    { field: 'boomBarrierId ', header: 'boomBarrierId', label: 'BoomBarrier Id' },
    { field: 'reportingTime ', header: 'reportingTime', label: 'Reporting Time' },
    { field: 'carrierWeight ', header: 'carrierWeight', label: 'Carrier Weight' },
    { field: 'tareWeight', header: 'tareWeight', label: 'Tare Weight' },
    { field: 'netWeight ', header: 'netWeight', label: 'Net Weight' },
    { field: 'fuelQuantity', header: 'fuelQuantity', label: 'Fuel Quantity' },
    { field: 'createdAt  ', header: 'createdAt ', label: 'Created At ' },
    { field: 'createdBy ', header: 'createdBy ', label: 'Created By ' },
    { field: 'updatedAt ', header: 'updatedAt', label: 'Updated At' },
    { field: 'updatedBy ', header: 'updatedBy ', label: 'Updated By ' },
  ];



  showDialog() {
    this.vehicleForm.reset();
    this.dialog = true;
  }
  editVehicle() {
    this.showDialog();

    this.submitLabel = "Update VehicleInfo";
  }
  initVehicle() {
    this.showDialog();
    this.submitLabel = "Add VehicleInfo";
  }


  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }



  onSubmit() {

  }
}
