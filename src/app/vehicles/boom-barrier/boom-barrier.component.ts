import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { boomBarrier } from 'src/app/demo/api/security';
import { SecurityService } from 'src/app/demo/service/security.service';
export interface ITableHeader {
  field: string;
  header: string;
  label: string;
}
@Component({
  selector: 'app-boom-barrier',
  templateUrl: './boom-barrier.component.html',
  styles: []
})
export class BoomBarrierComponent {
  dialog: boolean = false;
  globalFilterFields: string[] = ['barrierId', 'isFillingStation', 'isGateEntry', 'isGateOut', 'isDumpArea', 'createdBy', 'createdAt', 'updatedBy', 'updatedAt'];

  @ViewChild('filter') filter!: ElementRef;
  barrierForm!: FormGroup;
  submitLabel!: string;
  screens: string[] = [];
  barrier: boomBarrier[] = [];
  constructor(private formbuilder: FormBuilder, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.barrierForm = this.formbuilder.group({
      barrierId: [''],
      isFillingStation: [],
      isGateEntry: [],
      isGateOut: [],
      isDumpArea: [],
      createdBy: new FormControl('', [Validators.required]),
      createdAt: new FormControl('', [Validators.required]),
      updatedBy: new FormControl('', [Validators.required]),
      updatedAt: new FormControl('', [Validators.required]),
    });

    this.initboomBarrier();
  }
  initboomBarrier() {
    this.securityService.getboomBarrier().then((data)=>{
      this.barrier=data;
    })
  }

  headers: ITableHeader[] = [
    { field: 'barrierId', header: 'barrierId', label: 'Barrier ID' },
    { field: 'isFillingStation', header: 'isFillingStation', label: 'Is Filling Station' },
    { field: 'isGateEntry', header: 'isGateEntry', label: 'Is Gate Entry' },
    { field: 'isGateOut', header: 'isGateOut', label: 'Is Gate Out' },
    { field: 'isDumpArea', header: 'isDumpArea', label: 'Is Dump Area' },
    { field: 'createdBy', header: 'createdBy', label: 'Careated By' },
    { field: 'createdAt', header: 'createdAt', label: 'Created At' },
    { field: 'updatedBy', header: 'updatedBy', label: 'Updated By' },
    { field: 'updatedAt', header: 'updatedAt', label: 'Updated At' },
  ];



  showDialog() {
    this.barrierForm.reset();
    this.dialog = true;
  }
  editbarrier() {
    this.showDialog();

    this.submitLabel = "Update Boom Barrier";
  }
  initbarrier() {
    this.showDialog();
    this.submitLabel = "Add Boom Barrier";
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
