import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: '',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['dashboard/admin']
                    },
                    // {
                    //     label: 'Student',
                    //     icon: 'pi pi-fw pi-image',
                    //     routerLink: ['/dashboard-employee']
                    // }
                ]
            },
            {
                label: 'Security',
                icon: 'pi pi-user',
                items: [
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['security/users']
                    },
                    {
                        label: 'Roles',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['security/roles']
                    },

                ]
            },
            {
                label: 'Vehicles',
                icon: 'pi pi-user',
                items: [
                    {
                        label: 'Vehicles Information',
                        icon: 'pi pi-fw pi-circle',
                        routerLink: ['vehicles/vehicleInfo']
                    },
                    {
                        label: 'Vehicles In & Out Info',
                        icon: 'pi pi-fw pi-calendar-plus',
                        routerLink: ['vehicles/vehiclesIn&outInfo']
                    },
                   
                    {
                        label: 'Boom Barrier',
                        icon: 'pi pi-fw pi-search-plus',
                        routerLink: ['vehicles/boomBarrier']
                    },
                   
                ]
            },
            

            // {
            //     label: 'Hierarchy',
            //     icon: 'pi pi-fw pi-align-left',
            //     items: [
            //         {
            //             label: 'Submenu 1',
            //             icon: 'pi pi-fw pi-align-left',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1',
            //                     icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         {
            //                             label: 'Submenu 1.1.1',
            //                             icon: 'pi pi-fw pi-align-left'
            //                         },
            //                         {
            //                             label: 'Submenu 1.1.2',
            //                             icon: 'pi pi-fw pi-align-left'
            //                         },
            //                         {
            //                             label: 'Submenu 1.1.3',
            //                             icon: 'pi pi-fw pi-align-left'
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2',
            //                     icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         {
            //                             label: 'Submenu 1.2.1',
            //                             icon: 'pi pi-fw pi-align-left'
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2',
            //             icon: 'pi pi-fw pi-align-left',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1',
            //                     icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         {
            //                             label: 'Submenu 2.1.1',
            //                             icon: 'pi pi-fw pi-align-left'
            //                         },
            //                         {
            //                             label: 'Submenu 2.1.2',
            //                             icon: 'pi pi-fw pi-align-left'
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2',
            //                     icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         {
            //                             label: 'Submenu 2.2.1',
            //                             icon: 'pi pi-fw pi-align-left'
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     ]
            // },

        ];
    }
}
