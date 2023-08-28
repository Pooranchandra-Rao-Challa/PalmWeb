import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { vehicles } from 'src/app/demo/api/security';
import { SecurityService } from 'src/app/demo/service/security.service';

export interface ITableHeader {
  field: string;
  header: string;
  label: string;
}
@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styles: []
})
export class VehicleInformationComponent implements OnInit {
  globalFilterFields: string[] = ['id', 'fastagId', 'vehicleNo','address','driverName','mobileNumber','driverAddress','pickListId','createdBy','createdAt','updatedBy','updatedAt'];

  dialog: boolean = false;
  @ViewChild('filter') filter!: ElementRef;
  vehicleForm!: FormGroup;
  submitLabel!: string;
  screens: string[] = [];
  vehicles: vehicles[];
  // ID
  // Fast tag id
  // Vehical No
  // Vechical Location
  // Driver Name 
  // Driver Number
  // Driver Address
  
  constructor(private formbuilder: FormBuilder, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.vehicleForm = this.formbuilder.group({
      id : [''],
      fastagId : new FormControl('', [Validators.required]),
      vehicleNo : new FormControl('', [Validators.required]),
      address : new FormControl('', [Validators.required]),
      driverName : new FormControl('', [Validators.required]),
      mobileNumber : new FormControl('', [Validators.required]),
      driverAddress : new FormControl('', [Validators.required]),
      pickListId: new FormControl('', [Validators.required]),
    });
   this.initVehicles();
  }
  initVehicles() {
    this.securityService.getVehicles().then((data) =>{
      this.vehicles = data;
    } );
  }


  headers: ITableHeader[] = [
    { field: 'id ', header: 'id', label: 'ID' },
    { field: 'fastagId ', header: 'fastTagId', label: 'Fast tag id ' },
    { field: 'vehicleNo ', header: 'vehicleNo', label: 'Vehical No' },
    { field: 'address ', header: 'address', label: 'Address' },
    { field: 'pickListId', header: 'pickListId', label: 'PickListId' },
    { field: 'driverName ', header: 'driverName', label: 'Driver Name ' },
    { field: 'phoneNo', header: 'phoneNo', label: 'PhoneNo' },
    { field: 'driverAddress ', header: 'driverAddress', label: 'driverAddress' },
    { field: 'createdAt  ', header: 'createdAt ', label: 'Created At ' },
    { field: 'createdBy ', header: 'createdBy ', label: 'Created By ' },
    { field: 'updatedAt ', header: 'updatedAt', label: 'Updated At' },
    { field: 'updatedBy ', header: 'updatedBy ', label: 'Updated By ' },

  ];



  showDialog() {
    this.vehicleForm.reset();
    this.dialog = true;
  }
  editVehicle(){
    this.showDialog();
    
    this.submitLabel = "Update Vehicle";
  }
  initVehicle() {
    this.showDialog();
      this.submitLabel = "Add Vehicle";
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
